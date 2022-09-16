<template>
  <div class="main-menu-title">
    <el-icon v-if="isCollapse" @click="onExpand"><Expand /></el-icon>
    <div v-else class="expand-title">
      <el-icon><icon-menu /></el-icon>
      <span>功能菜单</span>
      <el-icon @click="onFold"><Fold /></el-icon>
    </div>
  </div>
  <el-menu
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <component
          :is="$icon['Edit']"
          style="width: 1.5em; height: 1.5em; margin-right: 8px; color: #123456"
        ></component>
        <span>Navigator One</span>
      </template>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
    <el-menu-item index="5">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Five</template>
    </el-menu-item>
    <el-menu-item index="6">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Six</template>
    </el-menu-item>
    <el-menu-item index="7">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Seven</template>
    </el-menu-item>
    <el-menu-item index="8">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Eight</template>
    </el-menu-item>
    <el-menu-item index="9">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Nine</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Expand,
  Fold,
} from "@element-plus/icons-vue";
import { useGlobalStore } from "@/store/global";
const userGlobal = useGlobalStore();

const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const onExpand = () => {
  isCollapse.value = false;
};
const onFold = () => {
  isCollapse.value = true;
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
}
.expand-title {
  display: flex;
  align-items: center;
  padding-left: 5px;
}
.expand-title span {
  margin-left: 10px;
  margin-right: 90px;
}

.el-menu-vertical-demo {
  height: calc(100% - var(--main-header-height));
  overflow-y: auto;
  overflow-x: hidden;
}
.el-menu-vertical-demo::-webkit-scrollbar {
  width: 1px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
  min-height: 400px;
}
</style>
