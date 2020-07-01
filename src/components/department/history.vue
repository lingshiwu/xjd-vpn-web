<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>部门管理</el-breadcrumb-item>
        <el-breadcrumb-item>历史资产</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row>
      <el-col>
        <el-table :data="histData" style="width: 100%" height="600">
          <el-table-column fixed type="index" label="编号" width="60"></el-table-column>
          <el-table-column prop="identity" label="所属部门" width="120"></el-table-column>
          <el-table-column prop="ip" label="服务器IP" width="150"></el-table-column>
          <el-table-column prop="db" label="数据库" width="150"></el-table-column>
          <el-table-column label="操作" width="300">
            <el-button @click="delnetadmin" type="danger" size="mini" icon="el-icon-delete" circle></el-button>
          </el-table-column>
        </el-table>
        <!-- 分页组件 -->
        <div class="pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-sizes="[1, 2, 3, 4]"
            :page-size="1"
            layout="total, sizes, prev, pager, next, jumper"
            :total="6"
          ></el-pagination>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      histData: [
        { identity: "网信中心", ip: "10.10.10.111", db: "10.10.10.111/3306" }
      ]
    };
  },
  methods: {
    delnetadmin() {
      this.$confirm("确定删除该用户?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message.success("删除成功!");
        })
        .catch(() => {
          this.$message.info("已取消删除!");
        });
    }
  }
};
</script>
<style>
</style>