<template>
  <div class="goblin-layout">
    <div class="com-imgs">
      <div
        :class="[item.active ? 'active' : '', 'img-list']"
        v-for="item in layouts"
        :key="item.id"
      >
        <img :src="item.src" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
/*
 * Component for rendering blocks of page layout with images.
 */
import '~/common/live-preview.scss';
export default {
  props: ['layouts'],
  methods: {},
};
</script>

<style lang="scss" scoped>
.goblin-layout img {
  width: 750px;
  height: auto;
  display: block;
  pointer-events: none;
}
</style>
