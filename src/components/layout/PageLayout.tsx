import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './PageLayout.module.css';
import { defaultLayoutConfig } from '@/config/layout';
import { defaultTheme } from '@/config/theme';
// import Grid from './Grid'; // Will be used to lay out stories
// import { PageLayoutParams } from '@/types/Layout'; // Assuming types are in @/types

interface PageLayoutProps {
  children: React.ReactNode;
  // layoutConfig: PageLayoutParams; // To be passed for dynamic styling
}

const PageLayout: React.FC<PageLayoutProps> = ({ children /*, layoutConfig */ }) => {
  // Styles for the outermost container - THIS is now centered
  const pageContainerStyle = {
    backgroundColor: defaultLayoutConfig.backgroundColor,
    maxWidth: defaultLayoutConfig.pageWidth,
    margin: '0 auto', // Horizontally center the entire page container
  };

  // Styles for the <main> element - it will take full width of centered pageContainer
  const mainElementStyle = {
    minWidth: defaultLayoutConfig.minPageWidth, // Optional: if you want main to have a minWidth independent of pageWrapper
    // No background color needed here anymore unless for specific design
  };

  // Styles for the inner content-wrapping div within <main> - primarily for padding
  const contentWrapperStyle = {
    padding: defaultTheme.spacing.pagePadding,
    // No maxWidth or margin: '0 auto' here anymore
    // No background color needed here anymore unless for specific design
  };

  return (
    <div className={styles.pageContainer} style={pageContainerStyle}>
      {/* <Header height={layoutConfig.header.height} /> */}
      <Header />
      {/* Apply styles.mainContent for flex-grow, and mainElementStyle for minWidth */}
      <main className={styles.mainContent} style={mainElementStyle}>
        <div style={contentWrapperStyle}>
          {children}
        </div>
      </main>
      {/* <Footer height={layoutConfig.footer.height} /> */}
      <Footer />
    </div>
  );
};

export default PageLayout; 