import PageLayout from '@/components/layout/PageLayout';
import Grid from '@/components/layout/Grid';
import React from 'react';
import fs from 'fs';
import path from 'path';
import { Story } from '@/types/Story';
import { defaultLayoutConfig } from '@/config/layout';

interface HomePageProps {
  stories: Story[];
}

const HomePage: React.FC<HomePageProps> = ({ stories }) => {
  if (!stories) {
    console.error("HomePage received undefined stories prop");
    return <PageLayout><p>Error loading stories. Please check server logs.</p></PageLayout>;
  }
  return (
    <PageLayout>
      {stories.length > 0 ? (
        <Grid stories={stories} />
      ) : (
        <p>No stories found. Add some to the content/stories directory!</p>
      )}
    </PageLayout>
  );
};

export async function getStaticProps() {
  const storiesDirectory = path.join(process.cwd(), 'src/content/stories');
  let storyFiles: string[] = [];
  try {
    storyFiles = fs.readdirSync(storiesDirectory);
    console.log("[getStaticProps] Files found:", storyFiles);
  } catch (error) {
    console.error("[getStaticProps] Could not read stories directory:", error);
    return { props: { stories: [] } }; 
  }

  const stories = storyFiles
    .filter(file => file.endsWith('.json'))
    .map(file => {
      const filePath = path.join(storiesDirectory, file);
      console.log(`[getStaticProps] Processing file: ${filePath}`);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      try {
        const storyData = JSON.parse(fileContents) as Story;
        storyData.layout = storyData.layout || { isHomePage: true, hierarchy: 99, span: defaultLayoutConfig.columnCount };
        storyData.layout.span = storyData.layout.span || defaultLayoutConfig.columnCount;
        storyData.layout.hierarchy = storyData.layout.hierarchy || 99;
        return storyData;
      } catch (e) {
        console.error(`[getStaticProps] Error parsing JSON from ${file}:`, e);
        return null;
      }
    })
    .filter(story => {
      return story !== null;
    }) as Story[];
  
  console.log("[getStaticProps] Final stories array to be passed as props:", JSON.stringify(stories, null, 2));

  return {
    props: {
      stories,
    },
    revalidate: 60, 
  };
}

export default HomePage; 