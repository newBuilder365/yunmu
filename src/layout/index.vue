<template>
  <el-container class="common-layout">
    <el-aside :width="userGlobal.isCollapse ? '65px' : '250px'">
      <AppAside />
    </el-aside>
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
import { useGlobalStore } from "@/store/global";
const userGlobal = useGlobalStore();
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
  height: 100vh;
  transition-property: width;
  transition-duration: 0.3s;
}
.common-layout .el-header {
  height: calc(var(--main-subHeader-height) + var(--main-header-height));
  background: var(--main-bg-color);
  --el-header-padding: 0px;
}

.common-layout .el-container {
  height: 100vh;
}

.common-layout .el-container .el-main {
  width: auto;
  background-color: #eaeaea;
  /* padding: 7px 0 7px 7px; */
  padding: 7px;
}

.common-layout .el-container .el-footer {
  background: var(--main-bg-color);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--main-footer-height);
}
</style>
