<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>业务管理员</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row>
      <el-col>
        <el-input placeholder="请输入内容" v-model="input3" class="searchinput">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button class="btn-cre" type="primary">增加</el-button>
      </el-col>
      <el-table :data="tableData" style="width: 100%" height="500">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column fixed type="index" label="编号" width="60"></el-table-column>
        <el-table-column prop="name" label="用户名" width="120"></el-table-column>
        <el-table-column prop="identity" label="身份" width="120"></el-table-column>
        <el-table-column prop="city" label="手机号" width="150"></el-table-column>
        <el-table-column prop="address" label="邮箱" width="200"></el-table-column>
        <el-table-column prop="zip" label="授权状态" width="120">
          <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </el-table-column>
        <el-table-column prop="date" label="授权时间" width="150"></el-table-column>
        <el-table-column prop="zip" label="操作" width="300">
          <el-button type="primary" size="mini" icon="el-icon-edit" circle></el-button>
          <el-button type="success" size="mini" icon="el-icon-check" circle></el-button>
          <el-button type="danger" size="mini" icon="el-icon-delete" circle></el-button>
        </el-table-column>
      </el-table>
    </el-row>
  </el-card>
</template>
<script>
export default {};
</script>
<style scoped>
.searchinput {
  width: 500px;
}
.btn-cre {
  margin-left: 100px;
}
</style>