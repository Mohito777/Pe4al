import React from 'react';
import { PageSpaceStyles } from '../styles/PageSpaceStyles';

export function PageSpace({ children, top, bottom }) {
  return (
    <PageSpaceStyles top={top} bottom={bottom}>
      {children}
    </PageSpaceStyles>
  );
}

export default PageSpace;

// jipV - быстрый импорт .
