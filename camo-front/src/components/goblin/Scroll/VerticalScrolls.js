import React from 'react';
import ScrollItems from './ScrollItems';
import { genStyle } from '../utils/common';
import { VERTICAL_SCROLL } from '../utils/constants';
import '@/style/Scroll.scss';

const VerticalScrolls = (props) => {
  const { vScrolls, pageKey } = props;
  return (
    <div className="VerticalScrolls">
      {vScrolls.map((vScroll) => (
        <div
          className={vScroll.active ? 'active' : ''}
          style={genStyle(vScroll.style, VERTICAL_SCROLL)}
          key={vScroll.id}
        >
          <ScrollItems direction="vertical" scrollItems={vScroll.elements} pageKey={pageKey} />
        </div>
      ))}
    </div>
  );
};
export default VerticalScrolls;
