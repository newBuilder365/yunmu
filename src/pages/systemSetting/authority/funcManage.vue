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
          row-key="code"
          :width="width"
          :height="height"
          :border="true"
        >
          <el-table-column
            prop="listOrder"
            label="排序"
            :align="'left'"
            header-align="center"
            width="80px"
          />
          <el-table-column
            prop="title"
            label="功能名称"
            :align="'left'"
            header-align="center"
          />
          <el-table-column
            prop="code"
            label="功能编码"
            :align="'left'"
            header-align="center"
          />
          <el-table-column
            prop="url"
            label="地址"
            :align="'left'"
            header-align="center"
          />
          <el-table-column
            prop="isValid"
            label="是否有效"
            :align="'left'"
            header-align="center"
          />
          <el-table-column
            prop="remark"
            label="备注"
            :align="'left'"
            header-align="center"
          />
          <el-table-column
            label="操作"
            :align="'center'"
            header-align="center"
            width="120"
          >
            <template #default>
              <el-button
                type="primary"
                link
                size="small"
                @click="dialogVisible = true"
              >
                编辑
              </el-button>
              <el-button type="danger" link size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </el-auto-resizer>
    <el-dialog
      v-model="dialogVisible"
      title="功能管理"
      width="700px"
      draggable
      :close-on-click-modal="false"
    >
      <Form ref="formRef"></Form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleCancel">取消</el-button>
          <el-button type="primary" @click="handleSave">保存</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Plus } from "@element-plus/icons-vue";
import Form from "./components/form.vue";
import { useGlobalStore } from "@/store/global";
const userGlobal = useGlobalStore();
const data = userGlobal.menu;
const dialogVisible = ref(false);
const formRef = ref();

// 保存
const handleSave = (): void => {
  if (formRef.value) {
    formRef.value.submitForm();
  }
};

// 取消
const handleCancel = (): void => {
  dialogVisible.value = false;
  if (formRef.value) {
    formRef.value.resetForm();
  }
};
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
