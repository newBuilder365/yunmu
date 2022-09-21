<template>
  <!-- 没有子节点，使用 el-menu-item 渲染 -->
  <el-menu-item
    v-if="!item['children'] || !item['children'].length"
    :index="item['url'] || item['code']"
  >
    <el-icon v-if="item['icon']">
      <Component :is="$icon[item['icon']]" />
    </el-icon>
    <span>{{ item["title"] }}</span>
  </el-menu-item>

  <!-- 有子节点，使用 el-sub-menu 渲染 -->
  <el-sub-menu v-else :index="item['code']">
    <template #title>
      <el-icon v-if="item['icon']">
        <Component :is="$icon[item['icon']]" />
      </el-icon>
      <span>{{ item["title"] }}</span>
    </template>
    <!-- 循环渲染 -->
    <custom-menu-item
      v-for="sub in item['children']"
      :key="sub['code']"
      :item="sub"
    />
  </el-sub-menu>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
