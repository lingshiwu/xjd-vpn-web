<template>
  <el-card>
    <div slot="header" class="clearfix">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>我的信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-card :body-style="{width:'500px'}">
      <el-form :label-position="labelPosition" label-width="150px" :model="formLabelAlign">
        <el-form-item label="名称：">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="部门：">
          <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>
        <el-form-item label="授权状态：">
          <el-input v-model="formLabelAlign.type"></el-input>
        </el-form-item>
        <el-form-item label="手机号：">
          <el-input v-model="formLabelAlign.type"></el-input>
          <el-button @click="diaEditTel=true" type="success">修改手机号</el-button>
          <el-input
            v-model="formLabelAlign.captcha_code"
            placeholder="请输入手机验证码"
            autocomplete="off"
            autocapitalize="off"
            maxlength="4"
            style="float: left; width: 150px;margin-top:10px"
          ></el-input>
          <el-button
            @click="sendTelMsg"
            :disabled="isDisabled"
            type="success"
            style="margin:10px"
          >{{buttonName}}</el-button>
        </el-form-item>

        <el-form-item label="邮箱：">
          <el-row>
            <el-input v-model="formLabelAlign.type"></el-input>
            <el-button class="el-icon-edit" type="warning" circle plain></el-button>
          </el-row>
        </el-form-item>
      </el-form>
      <el-dialog></el-dialog>
    </el-card>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      diaEditTel: false,
      labelPosition: "right",
      formLabelAlign: {},
      isDisabled: false,
      time: 10,
      buttonName: "获取验证码"
    };
  },
  methods: {
    sendTelMsg() {
      let me = this;
      me.isDisabled = true;
      let interval = window.setInterval(function() {
        me.buttonName = me.time + "秒";
        --me.time;
        if (me.time < 0) {
          me.buttonName = "重新发送";
          me.time = 10;
          me.isDisabled = false;
          window.clearInterval(interval);
        }
      }, 1000);
    }
  }
};
</script>
<style >
</style>