<template>
  <div class="toTop" v-if="show">
    <img :src="src" :alt="alt" />
  </div>
</template>
<script>
export default {
  name: 'ScrollToTop',
  props: ['src', 'alt', 'show'],
};
</script>
<style lang="scss" scoped>
.toTop {
  position: fixed;
  right: 17px;
  bottom: 26px;
  width: 46px;
  display: block;
}
</style>