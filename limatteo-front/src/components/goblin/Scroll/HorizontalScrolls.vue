<template>
  <div class="no-scroll-bar">
    <div v-for="hScroll in hScrolls" :key="hScroll.id">
      <div :style="`${genStyle(hScroll.style)};overflow-x:scroll`" :class="[hScroll.active ? 'active' : '']">
          <ScrollItems direction="horizontal" :scrollItems="hScroll.elements" :pagekey="pagekey"/>
      </div>
    </div>
  </div>
</template>

<script>
/*
 * Component for rendering horizontal scroll components.
 */
import '~/common/live-preview.scss';
import '~/common/share.scss';
import mixin from '../utils/mixin';
import { HORIZONTAL_SCROLL } from '../utils/constants';
import ScrollItems from './ScrollItems.vue';

export default {
  props: ['hScrolls', 'pagekey'],
  mixins: [mixin],
  components: {
    ScrollItems,
  },
  data() {
    return {
      styleCandidates: HORIZONTAL_SCROLL.styleCandidates,
      defaultStyle: HORIZONTAL_SCROLL.defaultStyle,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>

</style>
