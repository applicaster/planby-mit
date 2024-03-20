import * as React from 'react';
// import { theme } from '../theme/theme';

// Import styles
import { LoaderStyled } from '../styles';

// const { Box, Shape } = LoaderStyled;
const { Box } = LoaderStyled;

// const Element = ({
//   width,
//   color,
//   animate,
//   marginRight,
//   transition,
// }: {
//   width: number;
//   color: string;
//   transition: { duration: number; ease?: string; delay?: number };
//   animate: { right: string[] };
//   marginRight?: number;
// }) => (
//   <Shape
//     className="SHAPE"
//     width={width}
//     color={color}
//     animate={animate}
//     transition={transition}
//     marginRight={marginRight}
//   />
// );

export function Loader({
  loadingSkeletonItemHeight,
}: {
  loadingSkeletonItemHeight: number;
}) {
  return (
    <Box aria-label="loading">
      <div>
        <div>
          <EPGLoadingSkeleton
            loadingSkeletonItemHeight={loadingSkeletonItemHeight}
          />
          {/* <h1
            style={{
              color: 'white',
              textAlign: 'center',
              marginTop: '50px',
              fontSize: '130px',
            }}
          >
            Loading...
          </h1> */}
        </div>

        {/* <div
          style={{ display: 'flex', justifyContent: 'end', marginBottom: 16 }}
        >
          <Element
            animate={{
              right: ['0px', '75px', '0px'],
            }}
            transition={{
              duration: 1,
            }}
            width={217}
            color={theme.loader.teal}
            marginRight={10}
          />
          <Element
            width={122}
            color={theme.loader.purple}
            animate={{
              right: ['0px', '50px', '0px'],
            }}
            transition={{
              duration: 1,
              delay: 0.02,
            }}
          />
        </div>
        <div
          style={{ display: 'flex', justifyContent: 'end', marginBottom: 16 }}
        >
          <Element
            width={267}
            color={theme.loader.pink}
            animate={{
              right: ['0px', '70px', '0px'],
            }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <Element
            width={217}
            color={theme.loader.purple}
            marginRight={10}
            animate={{
              right: ['0px', '95px', '0px'],
            }}
            transition={{
              delay: 0.3,
              duration: 1,
            }}
          />
          <Element
            width={80}
            color={theme.loader.teal}
            animate={{
              right: ['0px', '70px', '0px'],
            }}
            transition={{
              duration: 1,
              delay: 0.33,
            }}
          />
        </div> */}
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
      zIndex: 200,
    },
    programSkeleton: {
      width: '100%',
      // height: `${loadingSkeletonItemHeight}px`,
      height: `150px`,
      backgroundColor: '#eee',
      marginBottom: '10px',
      animation: 'skeleton-loading 1.5s ease-in-out infinite alternate',
      zIndex: 200,
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
      <div
        style={{
          width: loadingSkeletonItemHeight,
        }}
      ></div>
    </div>
  );
}
