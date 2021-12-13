<template>
  <div class="floatIcon" v-if="show">
    <img :src="src" :alt="alt" />
  </div>
</template>
<script>
export default {
  name: 'FloatIcon',
  props: ['src', 'alt', 'show'],
};
</script>
<style lang="scss" scoped>
.floatIcon {
  position: fixed;
  left: 14px;
  bottom: 11px;
  width: 90px;
  display: block;
}
</style>