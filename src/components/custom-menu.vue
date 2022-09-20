<template>
  <el-menu v-bind="$attrs">
    <CustomMenuItem
      v-for="(item, index) in props.data"
      :key="index"
      :item="item"
    />
  </el-menu>
</template>

<script lang="ts" setup>
import CustomMenuItem from "./custom-menu-item.vue";
import { defineProps, PropType } from "vue";
import { MenuItem } from "@/types/global";

const props = defineProps({
  data: {
    type: Array as PropType<MenuItem[]>,
    required: true,
  },
});
</script>

<style scoped></style>
