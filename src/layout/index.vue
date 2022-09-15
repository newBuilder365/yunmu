<template>
  <el-container class="common-layout">
    <el-aside><AppAside /></el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import AppAside from "./components/app-aside.vue";
</script>

<style scoped>
.common-layout .el-aside {
  background: #fff;
  width: auto;
  height: 100vh;
  overflow: hidden;
}

.common-layout .el-header {
  height: var(--main-header-height);
  background: skyblue;
}

.common-layout .el-container {
  height: 100vh;
}

.common-layout .el-container .el-footer {
  background-color: orange;
  height: var(--main-footer-height);
  /* display: none; */
}
</style>
