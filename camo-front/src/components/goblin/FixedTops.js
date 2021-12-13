import * as React from 'react';
import { genStyle, genBg, goSomewhere } from './utils/common';
import { FIXED_TOP } from './utils/constants';
import { useLocation } from '@reach/router';
import '@/style/common.scss';

const FixedTops = (props) => {
  const { fixedTops, pageKey } = props;
  const Location = useLocation();
  const channel = new URLSearchParams(Location.search).get('trk');
  return (
    <div className="FixedTops">
      {fixedTops.map((fixedTop) => (
        <div className={`${fixedTop.active ? 'active' : ''} HotArea`} key={fixedTop.id}>
          <div className="BaseBtn" style={genStyle(fixedTop.style, FIXED_TOP)}>
            <div className="HotArea__Area" style={genBg(fixedTop.bgStyle)}>
              <button
                aria-hidden="true"
                onClick={() => {
                  goSomewhere(fixedTop, channel, pageKey);
                }}
              ></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FixedTops;
