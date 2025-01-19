<template>
  <div class="container">
    <div class="app-container">
      <el-tree
        :expand-on-click-node="false"
        default-expand-all
        :data="depts"
        :props="props"
      >
        <!-- 父组件传递的数据通过插槽的形式进行传递 -->
        <template v-slot="{ data }">
          <el-row
            style="width: 100%; height: 40px"
            type="flex"
            align="middle"
            justify="space-between"
          >
            <el-col>{{ data.name }}</el-col>
            <el-col :span="4">
              <!-- <span class="tree-manager"> 管理员 </span>  -->
              <!-- 下拉菜单项 -->
              <el-dropdown @command="handleCommand($event,data.id)">
                <span class="el-dropdown-link">
                  操作<i class="el-icon-arrow-down el-icon--right" />
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="add">添加子部门</el-dropdown-item>
                  <el-dropdown-item command="edit">编辑子部门</el-dropdown-item>
                  <el-dropdown-item command="del">删除</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
        </template>
      </el-tree>
    </div>
    <add-dept ref="addDept" :current-id="currentId" :show-dialog.sync="showDialog" @updateDepts="getDepts" />
  </div>
</template>

<script>
import { deleteDepartment, getDepartmentList } from '@/api/department'
import addDept from './component/add-dept.vue'
export default {
  name: 'Department',
  components: { addDept },
  data() {
    return {
      currentId: '',
      depts: [],
      props: { children: 'children', label: 'name' },
      showDialog: false
    }
  },
  async created() {
    console.log('created')
    this.getDepts()
  },
  methods: {
    async getDepts() {
      const depts = await getDepartmentList()
      console.log('=============')
      console.log(depts.data.data)
      this.depts = [depts.data.data]
    },
    handleCommand(type, id) {
      this.currentId = id
      console.log(type, id)
      if (type === 'add') {
        this.currentId = 0
        this.showDialog = true
      } else if (type === 'edit') {
        this.$nextTick(() => {
          console.log('edit===========')
          this.$refs.addDept.getDepartmentDetail()
          this.showDialog = true
        })
      } else if (type === 'del') {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async() => {
          await deleteDepartment(id).then(res => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            this.getDepts()
          })
        })
      }
    }
  }
}
</script>

<style>
.app-container {
  padding: 30px 140px;
  font-size: 16px;
}
.tree-manager {
  width: 50px;
  margin: 20px;
  display: inline-block;
}
</style>
