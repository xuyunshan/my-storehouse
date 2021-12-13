<template>
  <div>
    <button @click="go1">feed</button>
    <button @click="go2">messaging</button>
  </div>
</template>

<script>
import callApp from '@/util/call-app/index';
export default {
  mounted() {},
  methods: {
    go1() {
      callApp(require('callapp-lib'), 'feed');
    },
    go2() {
      callApp(require('callapp-lib'), 'messaging');
    },
  },
};
</script>

<style>
</style>