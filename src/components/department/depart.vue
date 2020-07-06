<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>部门管理</el-breadcrumb-item>
        <el-breadcrumb-item>部门资产</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row>
      <el-col>
        <el-button
          @click="daiAddDepart=true"
          type="success"
          style="margin-right:20px;float:right"
        >增加部门</el-button>
        <el-button
          @click="daiProAuth=true"
          type="success"
          style="margin-right:20px;float:right" plain
        >临时授权</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div>
          <el-button type="primary" @click="diaAsset=true">部门名称</el-button>
        </div>
      </el-col>
      <el-col></el-col>
    </el-row>
    <!-- 临时授权 -->
    <el-dialog title="临时授权" :visible.sync="daiProAuth" v-dialogDrag center width="400px">
      <el-form :model="form">
        <el-form-item label="部门名称:" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="on"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="daiProAuth = false">取 消</el-button>
        <el-button type="primary" @click="proAuth">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 增加部门 -->
    <el-dialog title="增加部门" :visible.sync="daiAddDepart" v-dialogDrag center width="400px">
      <el-form :model="form">
        <el-form-item label="部门名称:" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="on"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="diaAddIP = false">取 消</el-button>
        <el-button type="primary" @click="addDepart">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 资产详情 -->
    <el-dialog title="资产详情" :visible.sync="diaAsset" v-dialogDrag center width="600px">
      <span>资产总数:</span>
      <el-row>
        <el-col :span="11">
          <el-card class="box-card" body-style="{width:'200px'}">
            <el-button
              @click="diaAddIP=true"
              type="success"
              style="float:right"
              icon="el-icon-plus"
              plain
              circle
            ></el-button>
            <el-table :data="gridData">
              <el-table-column fixed type="index" label="编号" width="50"></el-table-column>
              <el-table-column property="ip" label="服务器IP" width="120"></el-table-column>
            </el-table>
          </el-card>
        </el-col>
        <el-col :span="11" :offset="2">
          <el-card class="box-card" body-style="{width:'200px'}">
            <el-button
              @click="diaAddDuankou=true"
              type="success"
              style="float:right"
              icon="el-icon-plus"
              plain
              circle
            ></el-button>
            <el-table :data="gridData">
              <el-table-column fixed type="index" label="编号" width="50"></el-table-column>
              <el-table-column property="duankou" label="数据库端口" width="150"></el-table-column>
            </el-table>
          </el-card>
        </el-col>
      </el-row>
    </el-dialog>
    <!-- 增加资产1 -->
    <el-dialog title="增加服务器资产" :visible.sync="diaAddIP" v-dialogDrag center width="300px">
      <el-form :model="form">
        <el-form-item label="服务器IP:" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="diaAddIP = false">取 消</el-button>
        <el-button type="primary" @click="addIP">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 增加资产2 -->
    <el-dialog title="增加数据库资产" :visible.sync="diaAddDuankou" v-dialogDrag center width="300px">
      <el-form :model="form">
        <el-form-item label="数据库地址:" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="diaAddDuankou = false">取 消</el-button>
        <el-button type="primary" @click="AddDuankou">确 定</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      daiProAuth:false,
      daiAddDepart: false,
      diaAddDuankou: false,
      diaAddIP: false,
      diaAsset: false,
      diaIPDetails: false,
      diaBroDetails: false,
      form: [],
      gridData: [{ ip: "10.10.10.111", duankou: "10.10.10.111/3306" }]
    };
  },
  methods: {
    handleCommand(command) {
      if (command === 1) {
        this.message.success("hahahahahha");
      }
    },
    addIP() {
      this.diaAddIP = false;
      this.$message.success("添加服务器成功!");
    },
    AddDuankou() {
      this.diaAddDuankou = false;
      this.$message.success("添加数据库成功!");
    },
    addDepart() {
      this.daiAddDepart = false;
      this.$message.success("新增部门成功!");
    },
    proAuth(){
      this.daiProAuth = false;
      this.$message.success("临时授权成功!");
    }
  }
};
</script>
<style>
.dropdown {
  height: 150px;
}
</style>