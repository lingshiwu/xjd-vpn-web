<template>
  <el-card>
    <div slot="header" class="clearfix">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>我的信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row>
      <el-col :offset="9" style="width:400px">
        <el-card :body-style="{width:'350px'}">
          <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
            <el-form-item label="姓名：">
              <span>姓名 姓名</span>
            </el-form-item>
            <el-form-item label="部门：">
              <span>部门名称</span>
            </el-form-item>
            <el-form-item label="授权状态：">
              <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
            </el-form-item>

            <el-form-item label="手机号：">
              <span>12345678910</span>
              <el-button @click="btnEditTel" type="text" style="float: right">修改</el-button>
            </el-form-item>

            <el-form-item label="邮箱：">
              <el-row>
                <span>12345678910@qq.com</span>
                <el-button @click="diaEditEmail=true" style="float: right" type="text">修改</el-button>
              </el-row>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>

    <!--修改手机号  -->
    <el-dialog title="修改手机号" :visible.sync="diaEditTel" v-dialogDrag center width="425px">
      <el-form label-position="right" label-width="80px">
        <el-form-item label="手机号：">
          <el-input style="width:270px;" v-model="formLabelAlign.type"></el-input>
          <el-input
            v-model="formLabelAlign.captcha_code"
            placeholder="请输入手机验证码"
            autocomplete="off"
            autocapitalize="off"
            maxlength="4"
            style="float: left; width: 150px;margin-top:10px;"
          ></el-input>
          <el-button
            @click="sendTelMsg"
            :disabled="isDisabled"
            type="success"
            style="float: left;margin:10px 0px 0px 8px"
          >{{buttonName}}</el-button>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="diaEditTel = false">取 消</el-button>
        <el-button type="primary" @click="editTel">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 修改邮箱 -->
    <el-dialog title="修改邮箱" :visible.sync="diaEditEmail" v-dialogDrag center width="425px">
      <el-form label-position="right" label-width="80px">
        <el-form-item label="邮箱：">
          <el-input style="width:270px;" v-model="formLabelAlign.type"></el-input>
          <el-input
            v-model="formLabelAlign.captcha_code"
            placeholder="请输入邮箱验证码"
            autocomplete="off"
            autocapitalize="off"
            maxlength="4"
            style="float: left; width: 150px;margin-top:10px"
          ></el-input>
          <el-button
            @click="sendTelMsg"
            :disabled="isDisabled"
            type="success"
            style="float: left;margin:10px 0px 0px 8px"
          >{{buttonName}}</el-button>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="diaEditTel = false">取 消</el-button>
        <el-button type="primary" @click="editEmail">确 定</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      value: true,
      diaEditEmail: false,
      diaEditTel: false,
      labelPosition: "right",
      formLabelAlign: {},
      isDisabled: false,
      time: 10,
      buttonName: "获取验证码"
    };
  },
  methods: {
    btnEditTel(el) {
      this.diaEditTel = true;
      el.style.color = "red";
    },
    editTel() {
      this.diaEditTel = false;
      this.$message.success("修改成功!");
    },
    editEmail() {
      this.diaEditEmail = false;
      this.$message.success("修改成功!");
    },
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