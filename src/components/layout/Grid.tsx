import React from 'react';
import { Story } from '@/types/Story';
import StoryCard from '@/components/stories/StoryCard';
import styles from './Grid.module.css';
import { defaultLayoutConfig } from '@/config/layout';

interface GridProps {
  stories: Story[];
  // Configuration for the grid, could be passed or use defaults
  columnCount?: number;
  columnGap?: string;
  rowGap?: string;
}

const Grid: React.FC<GridProps> = ({ 
  stories,
  columnCount = defaultLayoutConfig.columnCount,
  columnGap = defaultLayoutConfig.columnGap,
  rowGap = defaultLayoutConfig.rowGap
}) => {

  const gridContainerStyle: React.CSSProperties = {
    gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
    gap: `${rowGap} ${columnGap}`,
    position: 'relative', // For positioning pseudo-elements if needed, though direct child pseudo is easier
  };

  let currentSpanSumInRow = 0;
  const storiesWithLayoutInfo = stories
    .sort((a, b) => a.layout.hierarchy - b.layout.hierarchy)
    .map((story) => {
      const storySpan = story.layout.span || columnCount;
      let isLastInVisualRow = false;

      if (currentSpanSumInRow + storySpan >= columnCount) {
        isLastInVisualRow = true;
        currentSpanSumInRow = 0; // Reset for the next visual row
      } else {
        currentSpanSumInRow += storySpan;
      }
      // If it's the last story overall and it didn't perfectly fill the row, it's still last for line purposes
      // This needs to be handled carefully if last item doesn't fill. Current logic might put a line.
      // For now, the reset above is key. If it's last item & currentSpanSumInRow !==0 after adding it, it's also last.
      // Let's refine: if, after this item, currentSpanSumInRow is reset OR it's the last item, it's effectively last for line drawing.
      // The logic above should make currentSpanSumInRow = 0 IF this item completes a row.

      return { ...story, _isLastInVisualRow: isLastInVisualRow };
    });
    
  // Second pass to correctly identify the last item if it doesn't perfectly fill a row
  // This is tricky. The above logic assumes that if currentSpanSumInRow + storySpan >= columnCount, that item *is* the last.
  // What if current story makes it 10, and next makes it 14 (on a 12 col grid)? story that made it 10 is last.
  // The map logic for `isLastInVisualRow` needs to be more robust by looking ahead or by summing up and then assigning.
  // A simpler approach for now: the above reset logic for currentSpanSumInRow is the primary driver.
  // The very last item in the `stories` array should also be considered `isLastInVisualRow` if its row isn't full.
  
  // Let's refine the mapping logic for isLastInVisualRow to be more accurate for this pass:
  currentSpanSumInRow = 0; // Reset for accurate calculation pass
  const finalStories = stories
    .sort((a, b) => a.layout.hierarchy - b.layout.hierarchy)
    .map((story, index, arr) => {
        const storySpan = story.layout.span || columnCount;
        let isLast = false;
        currentSpanSumInRow += storySpan;
        if (currentSpanSumInRow >= columnCount) {
            isLast = true;
            currentSpanSumInRow = 0; 
        } else if (index === arr.length - 1) {
            // If it's the last story overall, it's also the last in its visual row
            isLast = true;
        }
        return { ...story, _isLastInVisualRow: isLast };
    });

  return (
    <div className={styles.gridContainer} style={gridContainerStyle}>
      {finalStories.map((storyWithInfo) => {
        const { _isLastInVisualRow, ...story } = storyWithInfo;
        return (
          <div 
            key={story.id} 
            className={`${styles.gridItem} ${storyWithInfo._isLastInVisualRow ? styles.isLastInRow : ''}`}
            style={{
              gridColumn: `span ${story.layout.span || columnCount}`,
              position: 'relative',
              ['--column-gap']: columnGap 
            } as React.CSSProperties}
          >
            <StoryCard story={story} />
          </div>
        );
      })}
    </div>
  );
};

export default Grid; 