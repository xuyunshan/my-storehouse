<template> </template>

<script>
// style 蓝色背景 灰色背景？
// onclick的时候变化？
export default {
  name: 'Float',
  props: ['img', 'position', 'width', 'height'],
  data() {
    return {};
  },
  methods: {
    onClick() {
      this.message = 'Here you go :)';
    }
  }
};
</script>

<style lang="scss">
@import '~/style/_color.scss';
.li-btn {
  height: 48px;
  padding: 14px 24px;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 24px;
  border: none;
  outline: none;
  cursor: pointer;
}

.primary {
  background-color: $linkedin-blue;
  color: white;
}

.secondary {
  background-color: $light-gray;
  color: $cool-gray;
}
</style>