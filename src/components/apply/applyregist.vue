<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>审核申请</el-breadcrumb-item>
        <el-breadcrumb-item>注册申请</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-table :data="tableData" style="width: 100%" height="500">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column fixed type="index" label="编号" width="60"></el-table-column>
      <el-table-column prop="name" label="管理员" width="120"></el-table-column>
      <el-table-column prop="identity" label="执行操作" width="120"></el-table-column>
      <el-table-column prop="city" label="乙方人员" width="150"></el-table-column>
      <el-table-column prop="address" label="单位名称" width="200"></el-table-column>
      <el-table-column prop="zip" label="授权日期" width="120"></el-table-column>
      <el-table-column prop="date" label="授权时长" width="150"></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {};
</script>
<style scoped>
</style>