<template>
  <div class="videoCon">
    <div class="con">
      <g-image :src="gifUrl" alt="" /></div>
    <slot />
  </div>
</template>
<script>
export default {
  name: 'VideoCon',
  props: ['gifUrl']
}
</script>
<style lang="scss" scoped>
.videoCon {
  width: 100%;
  position: relative;
}
.videoCon .con{
  display:flex;
  align-items:center;
  justify-content:center;
  width: 40vh;
  height: 40vh;
  max-width:80vw;
  max-height:80vw;
  position: relative;
  background: url('https://www.linkedin-event.com/image/onboarding-guide/circle-boarder.png') no-repeat;
  background-size:100% 100%;
  margin:  0 auto;
  overflow: hidden;
  border-radius: 50%;
  z-index: 300;
  display: flex;
  justify-content: center;
}
.videoCon .con img {
  // width: calc(100% - 3vh);
  // height: calc(100% - 3vh);
  width: calc(100% - 8vh);
  height: calc(100% - 8vh);
  max-width: 77vw;
  max-height: 77vw;
  border-radius: 50%;
  z-index: 300;
}

// @media (min-aspect-ratio: 4/7) {
// .videoCon {
//   width: 100%;
//   position: relative;
// }
// .videoCon .con{
//   width: 420px;
//   height: 420px;
//   position: relative;
//   background: url('https://cdn.chitu.com/onboardingGuide/window.png') no-repeat;
//   background-size:100% 100%;
//   margin:  0 auto;
//   overflow: hidden;
//   border-radius: 50%;
//   z-index: 300;
//   display: flex;
//   justify-content: center;
// }
// .videoCon .con img {
//   width: calc(100% - 80px);
//   height: calc(100% - 80px);
//   border-radius: 50%;
//   margin-top:30px;
//   z-index: 300;
// }
// }
</style>