<template>
  <div class="container-inner">
    <div class="operate">
      <el-button
        type="primary"
        size="small"
        :icon="Plus"
        @click="dialogVisible = true"
      >
        新增
      </el-button>
    </div>
    <el-auto-resizer>
      <template #default="{ height, width }">
        <el-table
          :data="data"
          table-layout="fixed"
          size="small"
          :width="width"
          :height="height"
          :border="true"
        >
          <el-table-column prop="FuncName" label="功能名称" :align="'center'" />
          <el-table-column prop="FuncCode" label="功能编码" :align="'center'" />
          <el-table-column prop="Url" label="地址" :align="'center'" />
          <el-table-column prop="ListOrder" label="排序" :align="'center'" />
          <el-table-column prop="IsValid" label="是否有效" :align="'center'" />
          <el-table-column prop="Remark" label="备注" :align="'center'" />
        </el-table>
      </template>
    </el-auto-resizer>
    <el-dialog v-model="dialogVisible" title="Tips" width="30%" draggable>
      <span>It's a draggable Dialog</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >Confirm</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Plus } from "@element-plus/icons-vue";
const data: any = [];
const dialogVisible = ref(false);
</script>

<style lang="less" scoped>
.operate {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 10px;
}
</style>
