<template>
  <div class="regist-wrap">
    <el-form label-position="top" label-width="60px" 
    :rules="registFromRules"
    :model="registData" ref="registFromRef" class="regist-from">
      <h2 class="regist-header">用户注册</h2>
      <el-form-item label="用户名" prop="username">
        <el-input
          v-model="registData.username"
          prefix-icon="el-icon-user-solid"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="registData.password"
          prefix-icon="el-icon-lock"
          show-password
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="telephone">
        <el-input v-model="registData.telephone" prefix-icon="el-icon-phone" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item label="身份证号" prop="IDnumber">
        <el-input
          v-model="registData.IDnumber"
          prefix-icon="el-icon-c-scale-to-original"
          placeholder="请输入身份证号"
        ></el-input>
      </el-form-item>
      <el-form-item label="所在单位" prop="unit">
        <el-input
          v-model="registData.unit"
          prefix-icon="el-icon-office-building"
          placeholder="请输入单位名称"
        ></el-input>
      </el-form-item>
      <el-form-item class="regist-btns">
        <el-button class="regist-btn" type="primary" @click="regist">提交</el-button>
        <el-button class="regist-btn" type="primary" @click="resetRegistForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registData: {
        username: "",
        password: "",
        telephone: "",
        IDnumber: "",
        unit: ""
      },
      registFromRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 10, message: "长度在2到10个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 18, message: "长度在6到18个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    resetRegistForm() {
      this.$refs.registFromRef.resetFields()
    },
    regist(){
        this.$notify({
            title:"成功",
            message:"请等待系统管理员确认",
            type:'success'
        }),
        this.$router.push("/login");

    }
  }
};
</script>

<style>
.regist-wrap {
  width: 100%;
  height: 100%;
}
.regist-header {
  display: flex;
  justify-content: center;
}
.regist-from {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 200px auto;
  width: 350px;
  padding: 20px 35px 35px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.regist-btns {
  display: flex;
  justify-content: center;
}
.regist-btn {
  width: 150px;
  height: 50px;
}
</style>