<template>
  <div class="title">
    <img :src="titleConSrc" alt="" />
    <img :src="titleConSrcMin" alt="">
  </div>
</template>
<script>
export default {
  name: 'GuideTitle',
  props: ['titleConSrc', 'titleConSrcMin'],
};
</script>
<style lang="scss" scoped>
.title {
  width: 600px;
  height: 220px;
  z-index: 100;
  position: relative;
  font-family: PingFang SC;
  font-style: normal;
  text-align: center;
  margin: 40px auto;
}
.title img:nth-child(1) {
  width: 600px;
  height: auto;
}
.title img:nth-child(2) {
  display: none;
}
@media (min-aspect-ratio: 4/7) {
  .title {
    width: 100%;
    height: 150px;
    z-index: 100;
    position: relative;
    font-family: PingFang SC;
    font-style: normal;
    text-align: center;
    margin: 30px auto;
    display: flex;
    justify-content: center;
    img:nth-child(1) {
      width: 600px;
      height: auto;
      display: none;
    }
    img:nth-child(2) {
      width: 600px;
      height: 180px;
      display: block;
    }
  }
}
</style>