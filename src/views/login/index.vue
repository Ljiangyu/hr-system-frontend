<template>
  <div class="login-container">
    <div class="logo" />
    <div class="form">
      <h1>登录</h1>
      <el-card shadow="never" class="login-card">
        <!--登录表单-->
        <el-form>
          <el-form-item>
            <el-input v-model="username" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item>
            <el-input v-model="password" placeholder="请输入密码" />
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="checked">相关协议</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width:100%">登录</el-button>
          </el-form-item>
          <el-form-item>
            <span style="margin-right: 15px">没有账号？</span>
            <span
              style="
              color: #409EFF;
              cursor: pointer;
              font-weight: bold;
            "
              :style="{ textDecoration: isHovering ? 'underline' : 'none' }"
              @click="register"
              @mouseover="isHovering = true"
              @mouseleave="isHovering = false"
            >
              注册
            </span>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login'
}
</script>
<style lang="scss">
.login-container {
  display: flex;
  align-items: stretch;
  height: 100vh;
  .logo {
    flex: 3;
    background: rgba(38, 72, 176) url(../../assets/common/login_back.png)
    no-repeat center / cover;
    border-top-right-radius: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding: 0 100px;
    .icon {
      background: url(../../assets/common/logo.png) no-repeat 70px center /
        contain;
      width: 300px;
      height: 50px;
      margin-bottom: 50px;
    }
    p {
      color: #fff;
      font-size: 18px;
      margin-top: 20px;
      width: 300px;
      text-align: center;
    }
  }
  .form {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 176px;
    .el-card {
      border: none;
      padding: 0;
    }
    h1 {
      padding-left: 20px;
      font-size: 24px;
    }
    .el-input {
      width: 350px;
      height: 44px;
      .el-input__inner {
        background: #f4f5fb;
      }
    }
    .el-checkbox {
      color:#606266;
    }
  }
}
</style>
