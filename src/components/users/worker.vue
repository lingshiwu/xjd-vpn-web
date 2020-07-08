<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>乙方人员</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row>
      <el-col>
        <el-input placeholder="请输入内容" class="searchinput">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button class="btn-cre" type="primary">增加</el-button>
      </el-col>
      <el-table :data="tableData" style="width: 100%;margin-top:80px" height="570">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column fixed type="index" label="编号" width="60"></el-table-column>
        <el-table-column prop="name" label="用户名" width="120"></el-table-column>
        <el-table-column prop="identity" label="公司名称" width="120"></el-table-column>
        <el-table-column prop="tel" label="手机号" width="150"></el-table-column>
        <el-table-column prop="email" label="邮箱" width="200"></el-table-column>
        <el-table-column prop="zip" label="授权状态" width="120">
          <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </el-table-column>
        <el-table-column prop="date" label="授权时间" width="150"></el-table-column>
        <el-table-column prop="auth_duration" label="授权时长" width="150"></el-table-column>
        <el-table-column prop="zip" label="操作" width="300">
          <el-tooltip class="item" effect="light" content="修改" placement="top">
            <el-button type="primary" size="mini" icon="el-icon-edit" circle></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="light" content="权限管理" placement="top">
            <el-button type="success" size="mini" icon="el-icon-s-tools" circle></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="light" content="发送邮件" placement="top">
            <el-button
              @click="delnetadmin"
              type="danger"
              size="mini"
              icon="el-icon-s-promotion"
              circle
            ></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="light" content="删除" placement="top">
            <el-button type="danger" size="mini" icon="el-icon-delete" circle></el-button>
          </el-tooltip>
        </el-table-column>
      </el-table>
      <!-- 分页组件 -->
      <div class="pagination">
        <el-pagination
          :page-sizes="[1, 2, 3, 4]"
          :page-size="1"
          layout="total, sizes, prev, pager, next, jumper"
          :total="6"
        ></el-pagination>
      </div>
    </el-row>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      value: true,
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          identity: "西安文渊软件",
          tel: 12345678901,
          email: "1245678901@qq.com",
          auth_duration: 30
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  methods: {
    delnetadmin() {
      this.$confirm("确定发送邮件?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message.success("发送成功!");
        })
        .catch(() => {});
    }
  }
};
</script>
<style scoped>
.searchinput {
  width: 500px;
}
.btn-cre {
  margin-left: 100px;
}
.pagination {
  margin: 40px;
}
</style>