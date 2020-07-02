<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>部门管理</el-breadcrumb-item>
        <el-breadcrumb-item>临时资产</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row>
      <el-col :span="11">
        <el-card shadow="hover" ref="elCard" v-bind:style="elCard">
          <el-table :data="personData" style="width: 100%" height="600">
            <el-table-column fixed type="index" label="编号" width="60"></el-table-column>
            <el-table-column prop="owner" label="所属部门" width="100"></el-table-column>
            <el-table-column prop="ip" label="服务器IP" width="150"></el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="11" :offset="1">
        <el-card shadow="hover" ref="elCard" v-bind:style="elCard">
          <el-table :data="personData" style="width: 100%" height="600">
            <el-table-column fixed type="index" label="编号" width="60"></el-table-column>
            <el-table-column prop="owner" label="所属部门" width="100"></el-table-column>
            <el-table-column prop="db" label="数据库" width="150"></el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </el-card>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style>
</style>