<template>
  <div>
    <div class="routers">
      <!-- <div @click="toPage1">百度地图</div> -->
      <div @click="toPage2">插槽</div>
      <div @click="toPage3">G6画图</div>
      <div @click="toPage4">vuex</div>
      <div @click="toPage5">demo</div>
      <div @click="toPage6">axios</div>
      <div @click="toPage7">中秋快乐</div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      myDiagram: {},
    };
  },
  created() {},
  mounted() {
    var that = this;
  },
  methods: {
    toPage1() {
      // this.$router.push('/page1');
    },
    toPage2() {
      this.$router.push('/page2');
    },
    toPage3() {
      this.$router.push('/page3');
    },
    toPage4() {
      this.$router.push('/page4');
    },
    toPage5() {
      this.$router.push('/page5');
    },
    toPage6() {
      this.$router.push('/page6');
    },
    toPage7() {
      this.$router.push('/page7');
    },
  },
};
</script>
<style lang="scss">
.assetsMapField {
  width: 100%;
  height: 700px;
}
.routers {
  display: flex;
  padding: 10px;
  div {
    width: 100px;
    cursor: pointer;
    &:hover {
      color: #1081fa;
    }
  }
}
</style>
