<template>
<body id="poster">
  <!-- rules="loginFromRules" -->
  <el-form label-position="top" label-width="60px" :model="loginData" class="login-from">
    <h2 class="login-header">用户登录</h2>
    <el-form-item label="用户名" prop="username">
      <el-input v-model="loginData.username" prefix-icon="el-icon-user-solid"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="loginData.password"
        prefix-icon="el-icon-lock"
        show-password
        placeholder="请输入密码"
      ></el-input>
    </el-form-item>
    <el-form-item class="login-btns">
      <el-button class="login-btn" type="primary" @click="login">登录</el-button>
      <el-button class="login-btn" type="primary" @click="regist">注册</el-button>
    </el-form-item>
  </el-form>
</body>
</template>

<script>
export default {
  data() {
    return {
      loginFromRules: [],
      loginData: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      this.$router.push("/");
    },
    regist() {
      this.$router.push("/regist");
    }
  }
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}
#poster {
  background: url("../assets/pic/pic01.jpg") no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
.login-from {
  border-radius: 10px;
  background-clip: padding-box;
  margin: 200px auto;
  width: 350px;
  padding: 20px 35px 35px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.login-btns {
  display: flex;
  justify-content: center;
}
.login-btn {
  width: 150px;
  height: 50px;
}
.login-header {
  display: flex;
  justify-content: center;
}
</style>