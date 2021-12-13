import * as React from 'react';
import { genStyle, genBg, goSomewhere } from './utils/common';
import { FIXED_ELEMENT } from './utils/constants';
import { useLocation } from '@reach/router';
import '@/style/common.scss';

const FixedElements = (props) => {
  const { fixedElements, pageKey } = props;
  const Location = useLocation();
  const channel = new URLSearchParams(Location.search).get('trk');
  return (
    <div className="FixedElements">
      {fixedElements.map((fixedElement) => (
        <div>
          <div
            className={`${fixedElement.active ? 'active' : ''} BaseBtn`}
            style={genStyle(fixedElement.style, FIXED_ELEMENT)}
            key={fixedElement.id}
          >
            <div className="HotArea__Area" style={genBg(fixedElement.bgStyle)}>
              <button
                aria-hidden="true"
                onClick={() => {
                  goSomewhere(fixedElement, channel, pageKey);
                }}
              ></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FixedElements;
