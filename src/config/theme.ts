import { FontConfig, Theme } from '@/types/Theme';

export const defaultTheme: Theme = {
  name: 'DefaultTheme',
  colors: {
    primary: '#0070f3',
    secondary: '#1c1c1e',
    accent: '#ff4081',
    textDefault: '#333333',
    textLight: '#666666',
    background: '#a9c1a9',
    surface: '#f8f9fa',
    error: '#d32f2f',
    success: '#4caf50'
  },
  typography: {
    headline1: {
      family: '"luke-thin", "Noto Serif", Georgia, serif',
      size: '6rem',
      weight: '100',
      lineHeight: '1.3',
      letterSpacing: 'normal'
    },
    storyHeadlineRank1: {
      family: '"Noto Serif", Georgia, serif',
      size: '2.25rem',
      weight: '700',
      lineHeight: '1.3'
    },
    storyHeadlineRank2: {
      family: '"Noto Serif", Georgia, serif',
      size: '1.75rem',
      weight: '700',
      lineHeight: '1.35'
    },
    storyHeadlineRank3: {
      family: '"Noto Serif", Georgia, serif',
      size: '1.5rem',
      weight: '700',
      lineHeight: '1.4'
    },
    storyHeadlineFallback: {
      family: '"Noto Serif", Georgia, serif',
      size: '1.25rem',
      weight: '700',
      lineHeight: '1.4'
    },
    body1: {
      family: '"Noto Serif", Arial, sans-serif',
      size: '0.9rem',
      weight: '400',
      lineHeight: '1.5'
    },
    headline3: undefined,
    caption: undefined,
    button: undefined,
    body2: undefined,
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    pagePadding: '24px',
    cardPadding: '16px'
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  },
  borderRadius: '4px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
}; 