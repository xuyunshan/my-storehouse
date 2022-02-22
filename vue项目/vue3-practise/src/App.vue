<script setup lang="ts">
import Guide from "./views/Guide.vue";
import Resource from "./views/Resource.vue";
import Components from "./views/Components.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="homePage">
    <header>
      <div class="navbar-wrapper">
        <div class="container">
          <div class="logo-container">
            <img
              src="https://element-plus.gitee.io/images/element-plus-logo.svg"
              alt=""
            />
          </div>
          <div class="content">
            <nav class="navbar-menu">
              <RouterLink class="menu-link-item" to="/guide"> 指南 </RouterLink>
              <RouterLink class="menu-link-item" to="/components">
                组件
              </RouterLink>
              <RouterLink class="menu-link-item" to="/resource">
                资源
              </RouterLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <main>

      <RouterView />
    </main>
  </div>
</template>

<style>
@import "@/assets/base.css";
header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}
.navbar-wrapper {
  background-color: #fff;
  color: var(--text-color);
  position: relative;
  border-bottom: 1px solid var(--border-color);
  padding: 0 12px 0 24px;
  height: var(--header-height);
  top: 0;
}
.container {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
.logo-container {
  display: flex;
  align-items: center;
  height: 55px;
}
.logo-container img {
  width: 128px;
  height: 28px;
}
.content {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
}
.navbar-menu {
  display: flex;
}
.menu-link-item {
  display: block;
  align-items: center;
  padding: 0 12px;
  line-height: calc(var(--nav-height) - 3px);
  font-size: 14px;
  font-weight: 500;
  color: var(--text-color);
  transition: color var(--el-transition-duration);
  border-bottom: 2px solid transparent;
}
main {
  padding-top: var(--nav-height);
}
</style>
