<template>
  <img :src="src" :alt="alt" class="banner" />
</template>

<script>
// load optimize
// occupy place in the first place
// instead of using click.native on parent, emit from child
export default {
  name: 'Banner',
  props: ['src', 'alt'],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  width: 100%;
}
</style>


