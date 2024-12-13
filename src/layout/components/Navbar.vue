<template>
  <div class="navbar">
    <hamburger
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />

    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img v-if="avatar" :src="avatar" class="user-avatar" />
          <span v-else class="username">{{ name?.charAt(0) }}</span>
          <span class="nameClass">{{ name }}</span>
          <i class="el-icon-setting" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item> 首页 </el-dropdown-item>
          </router-link>
          <a
            target="_blank"
            href="https://github.com/Ljiangyu/hr-system-frontend"
          >
            <el-dropdown-item>前端</el-dropdown-item>
          </a>
          <a
            target="_blank"
            href="https://github.com/Ljiangyu/hr-system-backend"
          >
            <el-dropdown-item>后端</el-dropdown-item>
          </a>
          <a
            target="_blank"
            href="https://panjiachen.github.io/vue-element-admin-site/#/"
          >
            <el-dropdown-item>Docs</el-dropdown-item>
          </a>
          <!-- 避免a 标签的原生操作 -->
          <a target="_blank" @click.prevent="updatePassword">
            <el-dropdown-item>修改密码</el-dropdown-item>
          </a>
          <!-- element的原生组件，注册本地事件 -->
          <el-dropdown-item divided @click.native="logout">
            <span style="display: block">Logout</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- update修改密码弹窗 -->
    <!-- .sync 可以接受子组件传递的数据 -->
    <el-dialog
      width="500px"
      title="修改密码"
      @close="btnCancel"
      :visible.sync="dialogFormVisible"
    >
      <el-form ref="form" :rules="rules" :model="form">
        <el-form-item
          prop="form.oldName"
          label="旧密码"
          :label-width="formLabelWidth"
        >
          <el-input
            show-password
            v-model="form.oldName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          prop="form.newName"
          label="新密码"
          :label-width="formLabelWidth"
        >
          <el-input
            show-password
            v-model="form.newName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          prop="form.nnewName"
          label="确认密码"
          :label-width="formLabelWidth"
        >
          <el-input
            show-password
            v-model="form.nnewName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消更改</el-button>
        <el-button type="primary" @click="updatePassword">确认更改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";
import { updateUserPwd } from "@/api/user";
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        oldName: "",
        newName: "",
        nnewName: "",
      },
      rules: {
        oldName: [{ required: true, message: "请输入旧密码", trigger: "blur" }],
        newName: [{ required: true, message: "请输入新密码", trigger: "blur" }],
        nnewName: [
          { required: true, message: "请输入确认密码", trigger: "blur" },
          {
            validator: (rule, value, callback) => {
              if (value !== this.form.newName) {
                callback(new Error("两次输入密码不一致!"));
              } else {
                callback();
              }
            },
          },
        ],
      },
      formLabelWidth: "80px",
    };
  },
  components: {
    Breadcrumb,
    Hamburger,
  },
  computed: {
    ...mapGetters(["sidebar", "avatar", "name"]),
  },
  methods: {
    updatePassword() {
      this.$refs["form"].validate(async (valid) => {
        if (valid) {
          await updateUserPwd(this.form);
          this.$message({
            type: "success",
            message: "修改成功!",
          });
          this.dialogFormVisible = false;
          this.$refs["form"].resetFields();
        }
      });
    },
    btnCancel() {
      this.dialogFormVisible = false;
      this.$refs["form"].resetFields();
    },
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        display: flex;
        align-items: center;
        .username {
          height: 30px;
          width: 30px;
          border-radius: 50%;
          background-color: #658b91;
          text-align: center;
          color: #fff;
          line-height: 30px;
          font-size: 14px;
          margin-right: 10px;
        }
        .nameClass {
          margin-right: 10px;
          font-size: 16px;
        }
        .el-icon-setting {
          font-size: 20px;
        }
        .el-icon-setting:hover {
          color: #409eff;
        }
        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
