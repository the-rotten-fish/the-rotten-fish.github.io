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

  const headerStyle: React.CSSProperties = {
    // height: headerConfig.height, // REMOVED fixed height
    backgroundColor: headerConfig.backgroundColor,
    color: headerConfig.textColor,
    // Padding is handled by the .header class for overall structure
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: themeTypography.headline1.family,
    fontSize: themeTypography.headline1.size,
    fontWeight: themeTypography.headline1.weight as React.CSSProperties['fontWeight'],
    lineHeight: themeTypography.headline1.lineHeight,
    // marginBottom: '20px', // Reduce or remove to let flexbox do more centering work
    // The .navigation class will have margin-top to create space for the first line
  };

  const navLinkStyle: React.CSSProperties = {
    fontFamily: themeTypography.body1.family, // Or a specific nav font
    fontSize: '0.9rem', // Example size
    textDecoration: 'none',
    color: headerConfig.textColor,
    margin: `0 ${themeSpacing.sm}`,
  };

  return (
    <header className={styles.header} style={headerStyle}>
      <h1 className={styles.title} style={titleStyle}>The Rotten Fish</h1>
      <nav className={styles.navigation}>
        {/* Links will be centered due to justify-content: center on styles.navigation */}
        <a href="#" style={navLinkStyle}>Country</a>
        <a href="#" style={navLinkStyle}>Politics</a>
        <a href="#" style={navLinkStyle}>Sports</a>
        <a href="#" style={navLinkStyle}>Work</a>
        <a href="#" style={navLinkStyle}>Rough Housing</a>
        <a href="#" style={navLinkStyle}>Grim</a>
      </nav>
    </header>
  );
};

export default Header; 