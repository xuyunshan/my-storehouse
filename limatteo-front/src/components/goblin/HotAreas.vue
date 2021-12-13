<template>
  <div>
    <div class="com-hot-area" v-for="item in hotAreas" :key="item.id">
      <div :style="genStyle(item.style)" :class="[item.active ? 'active' : '', 'base-btn']">
        <div class="com-hot-area__area">
          <a class="com-hot-area__link" href="javascript:void(0)" @click="goSomewhere(item)"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*
 * Component for rendering a hot area, support tracking.
 */
import '~/common/live-preview.scss';
import mixin from './utils/mixin';
import { HOT_AREA } from './utils/constants';
export default {
  // 一开始，可以设置一个有半透明的绿色，方便调整位置
  // style 纯数字就是默认px，包含百分号要单独考虑50%
  props: ['hotAreas', 'pagekey'],
  mixins: [mixin],
  data() {
    return {
      styleCandidates: HOT_AREA.styleCandidates,
      defaultStyle: HOT_AREA.defaultStyle,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.base-btn .com-hot-area__area {
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: 50%;
}
.base-btn .com-hot-area__area,
.base-btn .com-hot-area__area a {
  width: 100%;
  height: 100%;
  display: block;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
