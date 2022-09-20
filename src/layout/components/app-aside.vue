<template>
  <div class="main-menu-title">
    <el-icon v-if="userGlobal.isCollapse" @click="onExpand"><Expand /></el-icon>
    <div v-else class="expand-title">
      <el-icon><icon-menu /></el-icon>
      <span>功能菜单</span>
      <el-icon @click="onFold"><Fold /></el-icon>
    </div>
  </div>
  <div class="el-menu-vertical-demo">
    <CustomMenu
      :data="userGlobal.menu"
      active-text-color="skyblue"
      :collapse="userGlobal.isCollapse"
      :collapse-transition="false"
      @open="handleOpen"
      @close="handleClose"
    />
  </div>
</template>

<script lang="ts" setup>
import { useGlobalStore } from "@/store/global";
import { Menu as IconMenu, Fold, Expand } from "@element-plus/icons-vue";
import CustomMenu from "@/components/custom-menu.vue";
const userGlobal = useGlobalStore();

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const onExpand = () => {
  userGlobal.updateCollapse(false);
};
const onFold = () => {
  userGlobal.updateCollapse(true);
};
</script>

<style scoped>
.main-menu-title {
  height: var(--main-header-height);
  background-color: var(--main-bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 18px;
}
.main-menu-title .el-icon {
  cursor: pointer;
  transition: all 0.3s;
}
.expand-title {
  display: flex;
  align-items: center;
  padding-left: 5px;
}
.expand-title span {
  margin-left: 10px;
  margin-right: 90px;
  overflow: hidden;
}

.el-menu-vertical-demo {
  height: calc(100% - var(--main-header-height));
  overflow-y: auto;
  overflow-x: hidden;
}
.el-menu-vertical-demo::-webkit-scrollbar {
  width: 0px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  min-height: 400px;
}
</style>
