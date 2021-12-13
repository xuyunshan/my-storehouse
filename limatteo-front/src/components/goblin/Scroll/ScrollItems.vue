<template>
  <div :class="['no-scroll-bar', internalClassName]">
    <div v-for="scrollItem in scrollItems" :key="scrollItem.id">
      <div
        :style="`${genStyle(scrollItem.style)};${genBg(scrollItem.bgStyle)};background-size:cover;`"
        @click="goSomewhere(scrollItem)"
      ></div>
    </div>
  </div>
</template>

<script>
/*
 * Component for render a scroll item, supposed to be used within HorizontalScroll and VerticalScroll.
 */
import '~/common/live-preview.scss';
import '~/common/share.scss';
import mixin from '../utils/mixin';
import { SCROLL_ITEM } from '../utils/constants';
export default {
  // 一开始，可以设置一个有半透明的绿色，方便调整位置
  // style 纯数字就是默认px，包含百分号要单独考虑50%
  props: ['scrollItems', 'direction', 'pagekey'],
  mixins: [mixin],
  data() {
    return {
      styleCandidates: SCROLL_ITEM.styleCandidates,
      defaultStyle: SCROLL_ITEM.defaultStyle,
      internalClassName: this.direction == 'horizontal' ? 'hscroll-internal' : 'vscroll-internal',
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.hscroll-internal {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  align-items: center;
}
.vscroll-internal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
