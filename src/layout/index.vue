<template>
  <div class="common-layout">
    <el-container>
      <el-aside><AppAside /></el-aside>
      <el-container class="layout-container">
        <el-header>Header</el-header>
        <el-main class="layout-content">
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import AppAside from "./components/app-aside.vue";
</script>

<style scoped>
.layout-container {
  min-height: 100vh;
}
.layout-content {
  height: calc(100%-100px);
  overflow: auto;
}
.el-header {
  background: skyblue;
  height: 60px;
}
.el-aside {
  background: #fff;
  width: auto;
  height: 100vh;
  overflow: auto;
}
.el-main {
  background: #e9eef3;
}
.el-footer {
  background-color: orange;
  height: 40px;
}
</style>
