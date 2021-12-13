import * as React from 'react';
import { genStyle, goSomewhere } from './utils/common';
import { HOT_AREA } from './utils/constants';
import { useLocation } from '@reach/router';

const HotAreas = (props) => {
  const { hotAreas, pageKey } = props;
  const Location = useLocation();
  const channel = new URLSearchParams(Location.search).get('trk');
  return (
    <div className="HotArea">
      {hotAreas.map((hotArea) => (
        <div
          className={hotArea.active ? 'active' : ''}
          aria-hidden="true"
          style={genStyle(hotArea.style, HOT_AREA)}
          onClick={() => {
            goSomewhere(hotArea, channel, pageKey);
          }}
          key={hotArea.id}
        ></div>
      ))}
    </div>
  );
};
export default HotAreas;
