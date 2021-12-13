import * as React from 'react';
import { goSomewhere } from './utils/common';
import { useLocation } from '@reach/router';
import '@/style/common.scss';
import '@/style/Layout.scss';

const Layouts = (props) => {
  const { layouts, pageKey } = props;
  const Location = useLocation();
  const channel = new URLSearchParams(Location.search).get('trk');
  return (
    <div className="Layouts">
      {layouts.map((layout) => (
        <div className={layout.active ? 'active' : ''} style={layout.style} key={layout.id}>
          <img
            aria-hidden="true"
            onClick={(e) => {
              goSomewhere(layout, channel, pageKey);
            }}
            alt=""
            src={layout.src}
          />
        </div>
      ))}
    </div>
  );
};
export default Layouts;
