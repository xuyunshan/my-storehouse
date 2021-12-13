<template>
  <div v-if="rule && rule.entrance">
    <div
      class="entrance"
      @click="openModal(rule.entrance)"
      :style="`${genStyle(rule.entrance.style)};${genBg(rule.entrance.bgStyle)};`"
    ></div>
    <div class="modalShadow" v-show="showModal">
      <div
        class="modalCont"
        :style="`${genStyle(rule.content.style)};`"
      >
        <img :src="rule.content.bgStyle" alt="">
        <div @click="closeModal" class="closeIcon" />
      </div>
    </div>
  </div>
</template>

<script>
// single pop image rule
import mixin from '../utils/mixin';
import { POP_RULE_ENTRANCE } from '../utils/constants';
export default {
  props: ['rule'],
  mixins: [mixin],
  data() {
    return {
      showModal: false,
      styleCandidates: POP_RULE_ENTRANCE.styleCandidates,
      defaultStyle: POP_RULE_ENTRANCE.defaultStyle,
    };
  },
  methods: {
    openModal(entrance) {
      document.documentElement.style.overflow = 'hidden';
      document.getElementById("app").style.height = '100%';
      this.fireTracking(entrance)
      this.showModal = true;
    },
    closeModal() {
      document.documentElement.style.overflow = 'scroll';
      document.getElementById("app").style.height = 'auto';
      this.showModal = false;
    },
  },
};
</script>

<style lang='scss' scoped>
.modalShadow {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  z-index: 1000;
  .modalCont {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    .closeIcon {
      position: absolute;
      right: 24px;
      top: 24px;
      width: 24px;
      height: 24px;
      background: center / cover no-repeat url('../../../assets/image/close_icon.png');
      -webkit-tap-highlight-color: transparent;
    }
    img{
      width: 100%;
      height: 100%;
    }
  }
}
.overflow-hidden {
  overflow: hidden;
}
</style>
