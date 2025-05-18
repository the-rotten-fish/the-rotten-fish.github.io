export interface FontConfig {
  family: string;
  weight?: string | number;
  size: string;
  lineHeight?: string;
  letterSpacing?: string;
}

export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  textDefault: string;
  textLight?: string;
  textDark?: string;
  background: string;
  surface?: string;
  error?: string;
  success?: string;
  // Add more as needed
}

export interface TypographyStyles {
  headline1: FontConfig;
  headline3?: FontConfig;
  storyHeadlineRank1: FontConfig;
  storyHeadlineRank2: FontConfig;
  storyHeadlineRank3: FontConfig;
  storyHeadlineFallback: FontConfig;
  body1: FontConfig;
  body2?: FontConfig;
  caption?: FontConfig;
  button?: FontConfig;
}

export interface Theme {
  name: string;
  colors: ColorPalette;
  typography: TypographyStyles;
  spacing: {
    xs: string; // extra small
    sm: string; // small
    md: string; // medium
    lg: string; // large
    xl: string; // extra large
    // Specific component spacing if needed
    cardPadding?: string;
    pagePadding?: string;
  };
  breakpoints?: {
    sm: string; // e.g., '640px'
    md: string; // e.g., '768px'
    lg: string; // e.g., '1024px'
    xl: string; // e.g., '1280px'
  };
  // Other theme elements like border-radius, shadows etc.
  borderRadius?: string;
  boxShadow?: string;
} 