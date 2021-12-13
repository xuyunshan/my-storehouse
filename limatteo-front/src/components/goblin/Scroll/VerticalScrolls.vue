<template>
  <div>
    <div v-for="vScroll in vScrolls" :key="vScroll.id">
      <div :style="`${genStyle(vScroll.style)};overflow-y:scroll`" :class="[vScroll.active ? 'active' : '']">
          <ScrollItems direction="vertical" :scrollItems="vScroll.elements" />
      </div>
    </div>
  </div>
</template>

<script>
/*
 * Component for rendering vertical scroll components.
 */
import '~/common/live-preview.scss';
import mixin from '../utils/mixin';
import { VERTICAL_SCROLL } from '../utils/constants';
import ScrollItems from './ScrollItems.vue';

export default {
  props: ['vScrolls', 'pagekey'],
  mixins: [mixin],
  components: {
    ScrollItems,
  },
  data() {
    return {
      styleCandidates: VERTICAL_SCROLL.styleCandidates,
      defaultStyle: VERTICAL_SCROLL.defaultStyle,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>

</style>
