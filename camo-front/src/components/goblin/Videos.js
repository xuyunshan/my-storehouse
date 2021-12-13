import React, { useEffect } from 'react';
import { genStyle, fireTracking } from './utils/common';
import { VIDEO } from './utils/constants';
import { useLocation } from '@reach/router';
const Videos = (props) => {
  const { videos, pageKey } = props;
  const Location = useLocation();
  const channel = new URLSearchParams(Location.search).get('trk');
  useEffect(() => {
    document.addEventListener(
      'WeixinJSBridgeReady',
      function () {
        document.getElementsByTagName('video')[0].play();
      },
      false
    );
  }, [Location]);
  return (
    <div className="Videos">
      {videos.map((video) => (
        <video
          className={video.active ? 'active' : ''}
          style={genStyle(video.style, VIDEO)}
          autoPlay={true}
          muted={true}
          playsInline={true}
          controls
          controlsList="nodownload"
          key={video.id}
          onPlay={() => {
            fireTracking(video, channel, pageKey);
          }}
        >
          <source src={video.src} type="video/mp4"></source>
        </video>
      ))}
    </div>
  );
};
export default Videos;
