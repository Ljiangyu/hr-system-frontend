<template>
  <div class="container">
    <div class="app-container">
      <el-tree default-expand-all :data="depts" :props="props">
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
              <el-dropdown>
                <span class="el-dropdown-link">
                  操作<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>添加子部门</el-dropdown-item>
                  <el-dropdown-item>编辑子部门</el-dropdown-item>
                  <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
        </template>
      </el-tree>
    </div>
  </div>
</template>

<script>
import { getDepartmentList } from "@/api/department";
export default {
  name: "Department",
  data() {
    return {
      depts: [],
      props: { children: "children", label: "name" },
    };
  },
  async created() {
    console.log("created");
    this.getDepts();
  },
  methods: {
    async getDepts() {
      const depts = await getDepartmentList();
      console.log("=============");
      console.log(depts.data.data);
      this.depts = [depts.data.data];
    },
  },
};
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