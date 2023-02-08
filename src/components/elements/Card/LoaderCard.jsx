import React from 'react';
import ContentLoader from 'react-content-loader';

const LoaderCard = (props) => (
    <ContentLoader
      speed={2}
      width={330}
      height={605}
      viewBox="0 0 330 605"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="124" y="418" rx="0" ry="0" width="1" height="0" />
      <rect x="0" y="0" rx="30" ry="30" width="330" height="400" />
      <rect x="20" y="420" rx="0" ry="0" width="80" height="30" />
      <rect x="20" y="455" rx="0" ry="0" width="240" height="30" />
      <rect x="20" y="500" rx="0" ry="0" width="70" height="30" />
      <rect x="20" y="533" rx="0" ry="0" width="125" height="45" />
      <rect x="235" y="500" rx="20" ry="20" width="80" height="80" />
    </ContentLoader>
)

export default LoaderCard