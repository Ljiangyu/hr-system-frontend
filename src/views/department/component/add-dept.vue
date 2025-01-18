<template>
  <el-dialog title="新增部门" :visible="showDialog" @close="btnCancel">
    <!-- 使用 el-form -->
    <el-form label-width="120px">
      <el-form-item label="部门名称">
        <el-input
          placeholder="请输入部门名称"
          style="width: 80%"
          size="mini"
        />
      </el-form-item>
      <el-form-item label="部门编码">
        <el-input
          placeholder="请输入部门编码"
          style="width: 80%"
          size="mini"
        />
      </el-form-item>
      <el-form-item>
        <el-row type="flex" justify="center">
          <el-col :span="12">
            <el-button
              type="primary"
              size="mini"
              @click="btnCancel"
            >取消</el-button>
          </el-col>
          <el-col :span="12">
            <el-button
              type="primary"
              size="mini"
              @click="btnCancel"
            >确定</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  props: {
    showDialog: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    btnCancel() {
      this.$emit('update:showDialog', false)
    }
  }
}
</script>

<style>
</style>
