<template>
  <div class="main-header">
    <div class="main-header-title">中后台管理系统</div>
    <div>
      <el-dropdown>
        <el-avatar
          :size="30"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item divided @click="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
  <div class="main-subHeader">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item
        ><a href="/">promotion management</a></el-breadcrumb-item
      >
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
const Router = useRouter();
const logout = () => {
  Router.push("/login");
};
</script>

<style scoped>
.main-header {
  display: flex;
  align-items: center;
  height: var(--main-header-height);
  justify-content: space-between;
  padding: 0 20px;
}
.main-subHeader {
  height: var(--main-subHeader-height);
  background-color: var(--main-subHeader-bgColor);
  width: 100%;
  box-shadow: 0px 2px 0px #fff;
  display: flex;
  align-items: center;
}
.main-header .main-header-title {
  font-weight: bold;
  color: #fff;
  font-size: 18px;
}
</style>
