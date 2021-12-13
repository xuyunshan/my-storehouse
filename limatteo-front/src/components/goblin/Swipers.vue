<template>
  <div>
    <div class="com-hot-area" v-for="item in swipers" :key="item.id">
      <div :class="[item.active ? 'active' : '', 'base-btn']" :style="genStyle(item.style)">
        <div class="com-hot-area__area">
          <div class="swiper-container" v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item2, index) in item.elements" :key="item2.id">
                <img :src="item2.src" alt="" style="z-index: 500" :data-index="index" />
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/css/swiper.css';
import '~/common/live-preview.scss';
import { isInWechatMiniprogram } from '../../util/container';
import mixin from './utils/mixin';
import { handleUrl, navigateToMiniWebview } from '../../util/url';
import { SWIPER } from './utils/constants';
export default {
  props: ['swipers', 'pagekey'],
  mixins: [mixin],
  directives: !process.browser
    ? {}
    : {
        swiper: require('vue-awesome-swiper').directive,
      },
  data() {
    let that = this;
    return {
      styleCandidates: SWIPER.styleCandidates,
      defaultStyle: SWIPER.defaultStyle,
      isSwiperReady: false,
      swiperOption: {
        direction: 'horizontal',
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        paginationClickable: true,
        observer: true,
        observeParents: true,
        disableOnInteraction: false,
        on: {
          click(a) {
            const channel = that.$route.query.trk || '';
            const swiperItem = that.swipers[0].elements[a.target.getAttribute('data-index')];
            if (swiperItem.clickTracking) {
              _czc.push([
                '_trackEvent', // required
                that.pagekey + channel, // pageKey
                'click', // event type
                swiperItem.clickTracking, // button name
                '',
                '',
              ]);
            }
            isInWechatMiniprogram().then((inMiniProgram) => {
              if (inMiniProgram) {
                navigateToMiniWebview(swiperItem.wxLink);
              } else {
                location.href = handleUrl(swiperItem.link, that.pagekey);
              }
            });
          },
        },
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.swiper-container,
.swiper-wrapper,
.swiper-slide,
.com-hot-area__area {
  width: 100%;
  height: 100%;
}

.swiper-slide img {
  width: auto;
  height: 100%;
  display: block;
}
</style>
<style lang="scss">
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 5px;
}
.swiper-pagination-bullet-active {
  background-color: #14224d !important;
}
.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 6px;
}
.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
}
</style>
