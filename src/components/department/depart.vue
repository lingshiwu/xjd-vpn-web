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
        <el-button class="btn" type="success" style="margin-right:20px;float:right">增加部门</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="dropdown">
          <el-dropdown type="primary" split-button trigger="click">
            部门名称
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="diaIPDetails=true">服务器</el-dropdown-item>
              <el-dropdown-item @click.native="diaBroDetails=true">数据库端口</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>

    <!-- 服务器详情 -->
    <el-dialog title="资产详情" :visible.sync="diaIPDetails" v-dialogDrag center width="300px">
      <span>资产总数:</span>
      <el-button type="success" icon="el-icon-plus" style="margin:0px 10px 0px 0px;float:right"></el-button>
      <el-table :data="gridData">
        <el-table-column fixed type="index" label="编号" width="90"></el-table-column>
        <el-table-column property="ip" label="服务器IP" width="120"></el-table-column>
      </el-table>
    </el-dialog>
    <!-- 数据库详情 -->
    <el-dialog title="资产详情" :visible.sync="diaBroDetails" v-dialogDrag center width="300px">
      <span>资产总数:</span>
      <el-button type="success" icon="el-icon-plus" style="margin:0px 10px 0px 0px;float:right"></el-button>
      <el-table :data="gridData">
        <el-table-column fixed type="index" label="编号" width="90"></el-table-column>
        <el-table-column property="duankou" label="数据库端口" width="150"></el-table-column>
      </el-table>
    </el-dialog>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      diaIPDetails: false,
      diaBroDetails: false,
      gridData: [{ ip: "10.10.10.111", duankou: "10.10.10.111/3306" }]
    };
  },
  methods: {
    handleCommand(command) {
      if (command === 1) {
        this.message.success("hahahahahha");
      }
    }
  }
};
</script>
<style>
.dropdown {
  height: 150px;
}
.btn {
  margin-left: 500px;
}
</style>