<template>
  <div class="main-login">
    <div class="main-login-title">中后台管理系统</div>
    <div class="main-login-form">
      <el-form :model="form" label-width="0px">
        <el-form-item label="">
          <el-input
            v-model="form.name"
            :prefix-icon="User"
            placeholder="请输入用户名"
            clearable
          />
        </el-form-item>
        <el-form-item label="">
          <el-input
            v-model="form.password"
            :prefix-icon="Key"
            type="password"
            show-password="true"
            placeholder="请输入密码"
            clearable
          />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { Key, User } from "@element-plus/icons-vue";
const Router = useRouter();
// do not use same name with ref
const form = reactive({
  name: "",
  password: "",
});

const onSubmit = () => {
  console.log("submit!");
  Router.push("/home");
};
</script>

<style lang="less" scoped>
.main-login {
  background-color: var(--main-bg-color);
  color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main-login .main-login-title {
  width: 600px;
  height: 60px;
  text-align: center;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.main-login .main-login-form {
  width: 380px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.main-login .main-login-form .el-form {
  width: 100%;
}

.main-login .main-login-form .el-button {
  width: 100%;
}
</style>
