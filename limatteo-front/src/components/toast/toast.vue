<template>
  <div class="wrap" v-if="showWrap" :class="showContent ? 'fadein' : 'fadeout'">{{ text }}</div>
</template>

<style scoped>
.wrap {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #4c4c4c;
  color: #fff;
  padding: 25px 95px;
  border-radius: 24px;
  font-size: 28px;
  line-height: 35px;
  font-weight: 400;
}
.fadein {
  animation: animate_in 0.25s;
}
.fadeout {
  animation: animate_out 0.25s;
  opacity: 0;
}
@keyframes animate_in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes animate_out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>