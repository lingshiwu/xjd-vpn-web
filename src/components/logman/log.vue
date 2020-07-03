<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>日志查看</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row>
      <el-col>
        <el-table :data="logData" style="width: 100%" height="600">
          <el-table-column type="selection" width="35"></el-table-column>
          <el-table-column fixed type="index" label="编号" width="60"></el-table-column>
          <el-table-column prop="adminName" label="管理员" width="120"></el-table-column>
          <el-table-column prop="operation" label="执行操作" width="200"></el-table-column>
          <el-table-column prop="partyB" label="乙方人员" width="120"></el-table-column>
          <el-table-column prop="companyB" label="乙方公司" width="120"></el-table-column>
          <el-table-column prop="date" label="授权时间" width="120"></el-table-column>
          <el-table-column prop="dateLong" label="授权时长" width="120"></el-table-column>
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
      logData: [
        {
          adminName: "张三",
          operation: "授权乙方",
          partyB: "李四",
          companyB: "aa公司",
          date: '2020‎年‎7‎月‎3‎日',
          dateLong: '30'
        }
      ]
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style>
.pagination {
  margin-top: 40px;
}
</style>