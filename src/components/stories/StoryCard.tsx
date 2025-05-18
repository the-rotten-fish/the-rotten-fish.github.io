import React from 'react';
import Image from 'next/image'; // Using Next.js Image component for optimization
import { Story } from '@/types/Story';
import styles from './StoryCard.module.css';
import { defaultTheme } from '@/config/theme';
import { FontConfig } from '@/types/Theme'; // Import FontConfig

interface StoryCardProps {
  story: Story;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  const { title, summary, assets } = story.content;
  const image = assets?.images?.[0];

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#f3ede1',
    paddingBottom: defaultTheme.spacing.cardPadding,
    display: 'flex',
    flexDirection: 'column' as React.CSSProperties['flexDirection'],
    height: '100%',
  };

  const summaryStyle: React.CSSProperties = {
    fontFamily: defaultTheme.typography.body1.family,
    fontSize: defaultTheme.typography.body1.size,
    fontWeight: defaultTheme.typography.body1.weight as React.CSSProperties['fontWeight'],
    lineHeight: defaultTheme.typography.body1.lineHeight,
    color: defaultTheme.colors.textLight,
    flexGrow: 1,
    marginTop: defaultTheme.spacing.sm,
  };

  const getHeadlineStyle = (hierarchy: number): FontConfig => {
    switch (hierarchy) {
      case 1:
        return defaultTheme.typography.storyHeadlineRank1;
      case 2:
        return defaultTheme.typography.storyHeadlineRank2;
      case 3:
        return defaultTheme.typography.storyHeadlineRank3;
      default:
        return defaultTheme.typography.storyHeadlineFallback;
    }
  };

  const headlineStyleToApply = getHeadlineStyle(story.layout.hierarchy);

  const titleSpecificStyle: React.CSSProperties = {
    fontFamily: headlineStyleToApply.family,
    fontSize: headlineStyleToApply.size,
    fontWeight: headlineStyleToApply.weight as React.CSSProperties['fontWeight'],
    lineHeight: headlineStyleToApply.lineHeight,
    color: defaultTheme.colors.textDefault,
  };

  return (
    <article className={styles.card} style={cardStyle}>
      {image && (
        <div className={styles.imageContainer}>
          <Image 
            src={image.src} 
            alt={image.alt} 
            width={500}
            height={300}
            style={{ objectFit: story.layout.imageConfig?.fit || 'cover' }} 
          />
        </div>
      )}
      <h2 className={styles.title} style={titleSpecificStyle}>{title}</h2>
      {summary && <p className={styles.summary} style={summaryStyle}>{summary}</p>}
      {/* We can add author, date, etc. later */}
    </article>
  );
};

export default StoryCard; 