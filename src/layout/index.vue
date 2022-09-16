<template>
  <el-container class="common-layout">
    <el-aside><AppAside /></el-aside>
    <el-container>
      <el-header><AppHeader /></el-header>
      <el-main>
        <el-scrollbar>
          <router-view></router-view>
        </el-scrollbar>
      </el-main>
      <el-footer><AppFooter /></el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import AppAside from "./components/app-aside.vue";
import AppHeader from "./components/app-header.vue";
import AppFooter from "./components/app-footer.vue";
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
.common-layout .el-aside {
  width: auto;
  height: 100vh;
  overflow: hidden;
}

.common-layout .el-header {
  height: var(--main-header-height);
  background: var(--main-bg-color);
}

.common-layout .el-container {
  height: 100vh;
}

.common-layout .el-container .el-main {
  padding: 0;
}

.common-layout .el-container .el-footer {
  background-color: #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--main-footer-height);
  /* display: none; */
}
</style>
