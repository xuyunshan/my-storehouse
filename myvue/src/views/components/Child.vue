<template>
  <div>
    今天天气真：
    <slot name="tit">123</slot>
    今天心情真
    <slot name="body">123</slot>
  </div>
</template>

<script>
export default {
  name: 'Child',
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
