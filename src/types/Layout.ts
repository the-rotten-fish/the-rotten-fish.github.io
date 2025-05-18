export interface PageHeaderParams {
  height: string; // e.g., '100px', '15vh'
  // Potentially add more specific controls for logo, nav, etc.
  backgroundColor?: string;
  textColor?: string;
}

export interface PageFooterParams {
  height: string; // e.g., '50px', '10vh'
  // Content for footer, e.g., copyright, links
  content?: string; // Could be markdown or structured content
  backgroundColor?: string;
  textColor?: string;
}

export interface PageLayoutParams {
  pageWidth: string; // e.g., '1200px', '90%'
  minPageWidth?: string; // e.g., '320px', '80%'
  columnCount: number;
  columnGap: string; // e.g., '16px', '1rem'
  rowGap: string; // e.g., '16px', '1rem'
  header: PageHeaderParams;
  footer: PageFooterParams;
  // Default typography settings can go here or in Theme.ts
  defaultFontFamily?: string;
  defaultFontSize?: string;
  // Add any other global page layout settings
  backgroundColor?: string;
}

// Example of a named layout configuration
export interface NamedLayout {
  name: string;
  settings: PageLayoutParams;
} 