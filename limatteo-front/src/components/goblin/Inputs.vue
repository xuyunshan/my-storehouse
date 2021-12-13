<template>
  <div>
    <input
      type="text"
      :style="genStyle(item.style)"
      v-for="item in inputs"
      :key="item.id"
      :value="item.value"
      readonly
    />
  </div>
</template>

<script>
/*
 * Component for rendering readonly inputs.
 */
import '~/common/live-preview.scss';
import mixin from './utils/mixin';
import { INPUT } from './utils/constants';
export default {
  // 一开始，可以设置一个有半透明的绿色，方便调整位置
  // style 纯数字就是默认px，包含百分号要单独考虑50%
  props: ['inputs'],
  mixins: [mixin],
  data() {
    return {
      styleCandidates: INPUT.styleCandidates,
      defaultStyle: INPUT.defaultStyle,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
input {
  height: 96px;
  border-radius: 8px;
  padding: 28px 32px;
  box-sizing: border-box;
  font-size: 32px;
  line-height: 125%;
  letter-spacing: -0.32px;
  color: rgba(0, 0, 0, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.6);
  &:focus {
    outline-width: 0;
  }
}
</style>
