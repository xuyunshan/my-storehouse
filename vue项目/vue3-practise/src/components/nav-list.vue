<template>
  <!-- <el-menu
    default-active="1-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
  >
     <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item one</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu> -->
  <el-menu default-active="1-1" class="el-menu-vertical-demo">
    <div
      :index="navItem_first.key"
      :key="navItem_first.key"
      v-for="navItem_first in navList"
    >
      <el-sub-menu v-if="navItem_first.children">
        <template #title>
          <el-icon><location /></el-icon>
          <span>{{ navItem_first.name }}</span>
        </template>

        <el-menu-item
          v-for="navItem_second in navItem_first.children"
          :key="navItem_second.key"
          :index="navItem_second.key"
          >{{ navItem_second.name }}</el-menu-item
        >
      </el-sub-menu>
      <el-menu-item v-else>{{ navItem_first.name }}</el-menu-item>
    </div>
  </el-menu>
</template>
<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  props: {
    navList: {
      required: true,
      type: Array,
    },
  },

  data() {
    return {};
  },
  mounted() {
    console.log(this.navList);
  },
};
</script>
<style scoped lang="scss"></style>
