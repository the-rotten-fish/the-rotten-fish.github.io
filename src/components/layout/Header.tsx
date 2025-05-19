import React from 'react';
import styles from './Header.module.css';
import { defaultLayoutConfig } from '@/config/layout';
import { defaultTheme } from '@/config/theme';

// interface HeaderProps {
//   height: string;
//   // Add other props like title, navigation links, etc.
// }

const Header: React.FC/*<HeaderProps>*/ = (/*{ height }*/) => {
  const headerConfig = defaultLayoutConfig.header;
  const themeTypography = defaultTheme.typography;
  const themeSpacing = defaultTheme.spacing;

  // Placeholder for dynamic date later
  const dateLine1 = "On this 18th day of May,";
  const dateLine2 = "in the year of our Lord 2025";

  const headerContainerStyle: React.CSSProperties = {
    // backgroundColor: headerConfig.backgroundColor, // Background is on .header class via CSS module
    // color: headerConfig.textColor, // Default text color for header
    position: 'relative', // Crucial for absolute positioning of the date
    // Height is determined by content + padding in Header.module.css
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: themeTypography.headline1.family,
    fontSize: themeTypography.headline1.size,
    fontWeight: themeTypography.headline1.weight as React.CSSProperties['fontWeight'],
    lineHeight: themeTypography.headline1.lineHeight,
  };

  const navLinkStyle: React.CSSProperties = {
    fontFamily: themeTypography.body1.family, 
    fontSize: '0.9rem', 
    textDecoration: 'none',
    color: headerConfig.textColor,
    margin: `0 ${themeSpacing.sm}`,
  };

  return (
    <header className={styles.header} style={headerContainerStyle}>
      <div className={styles.dateBlock}>
        {dateLine1}<br />
        {dateLine2}
      </div>

      <div className={styles.titleNavBlock}> {/* Wrapper for title and nav */} 
        <h1 className={styles.title} style={titleStyle}>The Rotten Fish</h1>
        <nav className={styles.navigation}>
          <a href="#" style={navLinkStyle}>God & Country</a>
          <a href="#" style={navLinkStyle}>Politics</a>
          <a href="#" style={navLinkStyle}>Work</a>
          <a href="#" style={navLinkStyle}>Family</a>
          <a href="#" style={navLinkStyle}>Rotten</a>
          <a href="#" style={navLinkStyle}>Sports</a>
          <a href="#" style={navLinkStyle}>Fashion</a>
          <a href="#" style={navLinkStyle}>Techmology</a>
        </nav>
      </div>
    </header>
  );
};

export default Header; 