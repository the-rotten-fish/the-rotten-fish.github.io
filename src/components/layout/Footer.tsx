import React from 'react';
import styles from './Footer.module.css';
import { defaultLayoutConfig } from '@/config/layout';
import { defaultTheme } from '@/config/theme';

// interface FooterProps {
//   height: string;
//   // Add other props like copyright text, links, etc.
// }

const Footer: React.FC/*<FooterProps>*/ = (/*{ height }*/) => {
  const footerStyle = {
    height: defaultLayoutConfig.footer.height,
    backgroundColor: defaultLayoutConfig.footer.backgroundColor,
    color: defaultLayoutConfig.footer.textColor,
    paddingLeft: defaultTheme.spacing.pagePadding,
    paddingRight: defaultTheme.spacing.pagePadding
  };

  return (
    <footer className={styles.footer} style={footerStyle}>
      <p className={styles.footerContent}>
        {defaultLayoutConfig.footer.content}
      </p>
      {/* Footer links and other content will go here */}
    </footer>
  );
};

export default Footer; 