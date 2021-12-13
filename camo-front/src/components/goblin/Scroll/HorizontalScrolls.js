import React from 'react';
import ScrollItems from './ScrollItems';
import { genStyle } from '../utils/common';
import { HORIZONTAL_SCROLL } from '../utils/constants';
import '@/style/Scroll.scss';

const HorizontalScroll = (props) => {
  const { hScrolls, pageKey } = props;
  return (
    <div className="HorizontalScrolls">
      {hScrolls.map((hScroll) => (
        <div
          className={hScroll.active ? 'active' : ''}
          style={genStyle(hScroll.style, HORIZONTAL_SCROLL)}
          key={hScroll.id}
        >
          <ScrollItems direction="horizontal" scrollItems={hScroll.elements} pageKey={pageKey} />
        </div>
      ))}
    </div>
  );
};
export default HorizontalScroll;
