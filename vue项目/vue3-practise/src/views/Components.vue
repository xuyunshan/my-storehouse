<script setup>
import NavList from "../components/nav-list.vue";
import { RouterView, RouterLink } from "vue-router";
import { navList } from'../data/compontent-nav_list.js'
</script>
<template>
  <div class="components-wrapper">
    <NavList class="nav-list" :navList="navList" />
    <div class="components-content"></div>
  </div>
</template>
<style scoped lang="scss">
.components-wrapper {
  display: flex;
  .nav-list {
    width: 210px;
  }
  .components-content {
    flex: 1;
  }
}
</style>
