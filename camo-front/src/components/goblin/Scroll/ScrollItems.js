import React from 'react';
import { genBg, genStyle, goSomewhere } from '../utils/common';
import { SCROLL_ITEM } from '../utils/constants';
import { useLocation } from '@reach/router';
import '@/style/Scroll.scss';

const ScrollItems = (props) => {
  const { scrollItems, direction, pageKey } = props;
  const Location = useLocation();
  const channel = new URLSearchParams(Location.search).get('trk');
  const isHorizontal = direction === 'horizontal';
  return (
    <div className={`NoScrollBar ${isHorizontal ? 'HScrollInternal' : 'VScrollInternal'}`}>
      {scrollItems.map((scrollItem) => (
        <div key={scrollItem.id}>
          <div
            style={{
              ...genStyle(scrollItem.style, SCROLL_ITEM),
              ...genBg(scrollItem.bgStyle),
            }}
            onClick={() => {
              goSomewhere(scrollItem, channel, pageKey);
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};
export default ScrollItems;
