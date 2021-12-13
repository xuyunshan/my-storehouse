<template>
  <div>
    <div class="com-hot-area" v-for="item in imagesToSave" :key="item.id">
      <div :class="[item.active ? 'active' : '', 'base-btn']" :style="genStyle(item.style)">
        <div class="com-hot-area__area">
          <img :src="item.src" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*
 * Component for image.
 */
import '~/common/live-preview.scss';
import mixin from './utils/mixin';
import { IMAGE_TO_SAVE } from './utils/constants';
export default {
  props: ['imagesToSave', 'pagekey'],
  mixins: [mixin],
  data() {
    return {
      styleCandidates: IMAGE_TO_SAVE.styleCandidates,
      defaultStyle: IMAGE_TO_SAVE.defaultStyle,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.com-hot-area img {
  width: 100%;
  height: 100%;
  display: block;
  -webkit-tap-highlight-color: transparent;
}
</style>
