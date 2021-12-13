<template>
  <transition name="slide-bottom-up">
    <div class="toArchives" v-if="show != 0">
      <div class="txtOne">{{ txt1 }}</div>
      <div class="txtTwo">{{ txt2 }}</div>
      <img @click="onInvokeApp" src="https://www.linkedin-event.com/image/onboarding-guide/buttom-group.png" alt="" />
    </div>
  </transition>
</template>
<script>
import { isIOS, isZephyrIOSDevice } from '../../util/container';
export default {
  name: 'ButtomBtn',
  props: ['txt1', 'txt2', 'show'],
  methods: {
    onInvokeApp() {
      _czc.push([
        '_trackEvent', // required
        'onboardingGuide', // pageKey
        'click', // event type
        'action', // button name
        '',
        '',
      ]);
      if (isZephyrIOSDevice()) {
        location.href = 'linkedin://you/profile';
      } else if (isIOS()) {
        location.href = 'https://www.linkedinmobileapp.com/m/profile/edit'
      } else {
        location.href = 'linkedin://you/profile/edit';
      }
    },
  },
  mounted() {
    //因为是SSR，需要mount之后再去实例化
    //https://gridsome.org/docs/assets-scripts/#without-ssr-support
    this.callApp = require('~/util/call-app');
  },
};
</script>
<style lang="scss" scoped>
.toArchives {
  width: 100%;
  height: 148px;
  position: fixed;
  bottom: 0;
  left: 0;
  font-family: PingFang SC;
  font-style: normal;
  background: #fff;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  z-index: 500;
}
.toArchives .txtOne {
  font-weight: 600;
  font-size: 36px;
  color: #004182;
  margin-left: 44px;
  margin-top: 22px;
}
.toArchives .txtTwo {
  font-size: 26px;
  color: #004182;
  font-style: normal;
  font-weight: normal;
  margin-left: 44px;
}
.toArchives img {
  width: 280px;
  height: auto;
  position: absolute;
  right: 0;
  top: -65px;
}
</style>