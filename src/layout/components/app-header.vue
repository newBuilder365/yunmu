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
}
.main-header .main-header-title {
  font-weight: bold;
  color: #fff;
  font-size: 18px;
}
</style>
