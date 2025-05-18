export interface ImageAsset {
  src: string;
  alt: string;
  caption?: string;
}

export interface VideoAsset {
  src: string;
  caption?: string;
  autoplay?: boolean;
  controls?: boolean;
}

export interface InteractiveAsset {
  type: string; // e.g., 'quiz', 'poll', 'map'
  data: any; // Structure depends on the interaction type
}

export interface StoryContent {
  title: string;
  author: string;
  date: string; // ISO date string
  article: string; // Markdown or HTML content
  assets?: {
    images?: ImageAsset[];
    videos?: VideoAsset[];
    interactions?: InteractiveAsset[];
  };
  // Optional: A brief summary for previews
  summary?: string;
}

export interface StoryLayout {
  isHomePage: boolean;
  hierarchy: number; // Determines order/prominence, e.g., 1 is most important
  span: number; // Number of columns the story spans
  depth?: number; // Suggested lines or percentage of page height
  imageConfig?: {
    position: 'center' | 'left' | 'right' | 'background' | 'none';
    size: 'small' | 'medium' | 'large' | 'full';
    fit?: 'cover' | 'contain';
  };
  // Potentially add specific component to use for this story card
  // component?: string;
}

export interface Story {
  id: string; // Unique identifier, could be a slug
  content: StoryContent;
  layout: StoryLayout;
  // Optional: For linking to a dedicated story page
  fullStoryPath?: string;
  // Optional: Tags or categories
  tags?: string[];
} 