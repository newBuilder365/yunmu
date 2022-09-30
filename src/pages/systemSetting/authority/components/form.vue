<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="80px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >
    <el-form-item label="功能名称" prop="title">
      <el-input v-model="ruleForm.title" />
    </el-form-item>
    <el-form-item label="功能编码" prop="code">
      <el-input v-model="ruleForm.code" />
    </el-form-item>
    <el-form-item label="地址" prop="url">
      <el-input v-model="ruleForm.url" />
    </el-form-item>
    <el-form-item label="排序" required>
      <el-form-item prop="listOrder">
        <el-input-number
          v-model="ruleForm.listOrder"
          :min="0"
          controls-position="right"
        />
      </el-form-item>
    </el-form-item>
    <el-form-item label="是否有效" prop="isValid">
      <el-switch v-model="ruleForm.isValid" />
    </el-form-item>
    <el-form-item label="备注" prop="remark">
      <el-input v-model="ruleForm.remark" type="textarea" />
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";

const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  title: "",
  code: "",
  url: "",
  listOrder: 0,
  isValid: false,
  remark: "",
});

const rules = reactive<FormRules>({
  FuncName: [
    { required: true, message: "功能名称不能为空！", trigger: "change" },
  ],
  FuncCode: [
    {
      required: true,
      message: "功能编码不能为空！",
      trigger: "change",
    },
  ],
  Url: [
    {
      required: true,
      message: "地址不能为空！",
      trigger: "change",
    },
  ],
  ListOrder: [
    {
      required: true,
      message: "排序不能为空！",
      trigger: "change",
    },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

defineExpose({
  submitForm: () => {
    submitForm(ruleFormRef.value);
  },
  resetForm: () => {
    resetForm(ruleFormRef.value);
  },
});
</script>
