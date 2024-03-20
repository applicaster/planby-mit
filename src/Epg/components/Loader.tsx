import * as React from 'react';

// Import styles
import { LoaderStyled } from '../styles';

const { Box } = LoaderStyled;

export function Loader({
  loadingSkeletonItemHeight,
}: {
  loadingSkeletonItemHeight: number;
}) {
  return (
    <Box aria-label="loading">
      <div>
        <EPGLoadingSkeleton
          loadingSkeletonItemHeight={loadingSkeletonItemHeight}
        />
      </div>
    </Box>
  );
}

function EPGLoadingSkeleton({
  loadingSkeletonItemHeight,
}: {
  loadingSkeletonItemHeight: number;
}) {
  const styles = {
    epgLoadingSkeleton: {
      width: '100%',
      zIndex: 300,
    },
    programSkeleton: {
      width: '100%',
      height: loadingSkeletonItemHeight
        ? `${loadingSkeletonItemHeight}px`
        : `80px`,
      backgroundColor: '#eee',
      marginBottom: '10px',
      animation: 'skeleton-loading 1.5s ease-in-out infinite alternate',
      zIndex: 300,
    },
    '@keyframes skeleton-loading': {
      '0%': {
        backgroundColor: 'hsl(200, 20%, 70%)',
      },
      '100%': {
        backgroundColor: 'hsl(200, 20%, 95%)',
      },
    },
  };

  return (
    <div style={styles.epgLoadingSkeleton}>
      <div
        style={styles.programSkeleton}
        className="epg-loading-skeleton-item-height"
      ></div>
      <div
        style={styles.programSkeleton}
        className="epg-loading-skeleton-item-height"
      ></div>
      <div
        style={styles.programSkeleton}
        className="epg-loading-skeleton-item-height"
      ></div>
    </div>
  );
}
