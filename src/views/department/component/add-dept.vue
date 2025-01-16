<template>
  <el-dialog title="新增部门" @close="btnCancel" :visible="showDialog">
    <!-- 显示弹窗类型 -->
  </el-dialog>
</template>

<script>
export default {
  props: {
    showDialog: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    btnCancel() {
      this.$emit("update:showDialog", false);
    },
  },
};
</script>

<style>
</style>