import * as React from 'react';
import { genStyle, genBg, goSomewhere } from './utils/common';
import { FIXED_BOTTOM } from './utils/constants';
import { useLocation } from '@reach/router';
import '@/style/common.scss';

const FixedBottoms = (props) => {
  const { fixedBottoms, pageKey } = props;
  const Location = useLocation();
  const channel = new URLSearchParams(Location.search).get('trk');
  return (
    <div className="FixedBottoms">
      {fixedBottoms.map((fixedBottom) => (
        <div className="HotArea" key={fixedBottom.id}>
          <div
            className={`${fixedBottom.active ? 'active' : ''} BaseBtn`}
            style={genStyle(fixedBottom.style, FIXED_BOTTOM)}
          >
            <div className="HotArea__Area" style={genBg(fixedBottom.bgStyle)}>
              <button
                aria-hidden="true"
                onClick={() => {
                  goSomewhere(fixedBottom, channel, pageKey);
                }}
              ></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FixedBottoms;
