import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { genStyle, goSomewhere } from './utils/common';
import { SWIPER } from './utils/constants';
import { useLocation } from '@reach/router';
import 'swiper/swiper.scss';
import '@/style/common.scss';
// use require: https://github.com/nolimits4web/swiper/issues/3777
require('swiper/components/pagination/pagination.scss');

SwiperCore.use([Autoplay, Pagination]);

const Swipers = (props) => {
  const { swipers, pageKey } = props;
  const Location = useLocation();
  const channel = new URLSearchParams(Location.search).get('trk');
  return (
    <div className="Swipers">
      {swipers.map((swiper) => (
        <div className="HotArea" key={swiper.id}>
          <div className={swiper.active ? 'active' : ''} style={genStyle(swiper.style, SWIPER)}>
            <div>
              <Swiper
                loop={true}
                direction={'horizontal'}
                autoplay={{ delay: 3000 }}
                observer={true}
                observeParents={true}
                pagination={{ clickable: true }}
                onClick={(swiper) => {
                  const swiperItem = swiper.elements[swiper.realIndex];
                  goSomewhere(swiperItem, channel, pageKey);
                }}
              >
                {swiper.elements.map((item) => (
                  <SwiperSlide key={item.id}>
                    <img src={item.src} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Swipers;
