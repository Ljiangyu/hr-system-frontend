<template>
  <el-dialog title="新增部门" :visible="showDialog" @close="btnCancel">
    <!-- 使用 el-form -->
    <el-form ref="addDept" :model="formData" label-width="120px">
      <el-form-item label="部门名称">
        <el-input
          v-model="formData.name"
          placeholder="请输入部门名称"
          style="width: 80%"
          size="mini"
        />
      </el-form-item>
      <el-form-item label="部门编码">
        <el-input
          v-model="formData.code"
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
              @click="isCancel"
            >取消</el-button>
          </el-col>
          <el-col :span="12">
            <el-button
              type="primary"
              size="mini"
              @click="isOk"
            >确定</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { addDepartment } from '@/api/department'
export default {
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    currentId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      formData: {
        code: '',
        name: '',
        parentId: ''
      }
    }
  },
  methods: {
    btnCancel() {
      this.$refs.addDept.resetFields()
      this.$emit('update:showDialog', false)
    },
    async isOk() {
      if (this.currentId) {
        // this.formData.pid = this.currentId
        const res = await addDepartment({ ...this.formData, parentId: this.currentId })
        console.log(res)
        if (res.data.code === 200) {
          this.$message.success('新增部门成功')
          this.$emit('updateDepts')
          this.btnCancel()
        }
      }
    },
    isCancel() {
      this.btnCancel()
    }
  }
}
</script>

<style>
</style>
