<template>
  <h1>测试 vueUse 的鼠标坐标</h1>
  <h3>Mouse: {{ x }} x {{ y }}</h3>
  <a-button type="primary">ant design</a-button>
  <br />
  <el-button type="primary">element plus</el-button>
</template>

<script lang="ts" setup>
import { useMouse } from "@vueuse/core";
// import Api from '@/api';
const { x, y } = useMouse();
// const requestRes = async () => {
//   let result = await Api.login('张三','123')
// }
</script>
