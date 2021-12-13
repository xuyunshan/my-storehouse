<template>
  <div v-if="rule && rule.entrance">
    <div
      class="entrance"
      @click="openModal(rule.entrance)"
      :style="`${genStyle(rule.entrance.style)};${genBg(rule.entrance.bgStyle)};`"
    ></div>
    <div class="modalShadow" v-show="showModal">
      <div class="modalCont">
        <div @click="closeModal" class="closeIcon">
          <img src="../../../assets/image/close_icon.png" alt="" />
        </div>
        <div class="modalTxt">
          <div class="title">{{ rule.content.title }}</div>
          <div v-for="contentPart in rule.content.parts" :key="contentPart.id">
            <div class="subTitle">{{ contentPart.subTitle }}</div>
            <p class="txt" v-for="(text, index) in contentPart.texts" :key="index">
              {{ text }}
            </p>
          </div>
        </div>
        <div class="closeBtn" @click="closeModal">关闭</div>
      </div>
    </div>
  </div>
</template>

<script>
// single pop text rule
// TODO: optimize the modal style. please align with designers @yunsxu
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
      //移动端下弹框禁止背景滑动
      //https://segmentfault.com/a/1190000016820135
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
      this.fireTracking(entrance)
      this.showModal = true;
    },
    closeModal() {
      //解除禁止滑动
      document.getElementsByTagName('body')[0].style.overflow = 'auto';
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
    width: 512px;
    height: 670px;
    background: #fff;
    padding: 60px 30px;
    box-sizing: border-box;
    overflow: hidden;
    ::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
    scrollbar-width: none; /* firefox */
    .closeIcon {
      position: absolute;
      right: 22px;
      top: 14px;
      img {
        width: 24px;
        height: 24px;
      }
    }
    .modalTxt {
      overflow-y: scroll;
      height: 480px;
      margin-bottom: 20px;
      .title {
        font-size: 28px;
        line-height: 55px;
        font-weight: bold;
      }
      .subTitle {
        font-size: 24px;
        line-height: 50px;
        font-weight: bold;
      }
      .txt {
        font-size: 24px;
        font-weight: normal;
        line-height: 42px;
        margin: 10px 0;
      }
    }
    .closeBtn {
      height: 90px;
      background: #0a66c2;
      border-radius: 90px;
      text-align: center;
      color: #fff;
      line-height: 90px;
      font-size: 32px;
    }
  }
}
.overflow-hidden {
  overflow: hidden;
}
</style>
