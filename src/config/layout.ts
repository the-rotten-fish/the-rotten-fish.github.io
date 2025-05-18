import { PageLayoutParams } from '@/types/Layout';

export const defaultLayoutConfig: PageLayoutParams = {
  pageWidth: '1200px',
  minPageWidth: '320px',
  columnCount: 12,
  columnGap: '24px',
  rowGap: '24px',
  header: {
    height: '150px',
    backgroundColor: '#f3ede1',
    textColor: '#333333'
  },
  footer: {
    height: '100px',
    backgroundColor: '#f3ede1',
    textColor: '#8a817c',
    content: '© ' + new Date().getFullYear() + ' The Rotten Fish. All rights reserved.'
  },
  backgroundColor: '#f3ede1'
};

// We can define other named layouts here if needed
// export const anotherLayoutConfig: PageLayoutParams = { ... }; 