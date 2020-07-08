<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>网络安全管理员</el-breadcrumb-item>
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
        <el-table-column prop="identity" label="身份" width="120"></el-table-column>
        <el-table-column prop="tel" label="手机号" width="150"></el-table-column>
        <el-table-column prop="email" label="邮箱" width="200"></el-table-column>
        <el-table-column prop="zip" label="授权状态" width="120">
          <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </el-table-column>
        <el-table-column prop="date" label="授权时间" width="150"></el-table-column>
        <el-table-column prop="auth_duration" label="授权时长" width="100"></el-table-column>
        <el-table-column label="操作" width="300">
          <el-tooltip class="item" effect="light" content="修改" placement="top">
            <el-button
              @click="dialogEditForm=true"
              type="primary"
              size="mini"
              icon="el-icon-edit"
              circle
            ></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="light" content="权限管理" placement="top">
            <el-button
              @click="ruleDialog=true"
              type="success"
              size="mini"
              icon="el-icon-s-tools"
              circle
            ></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="light" content="删除" placement="top">
            <el-button @click="delnetadmin" type="danger" size="mini" icon="el-icon-delete" circle></el-button>
          </el-tooltip>
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
    </el-row>
    <!-- 修改页面 -->
    <el-dialog
      class="dialogEdit"
      title="修改信息"
      width="400px"
      center
      :visible.sync="dialogEditForm"
      v-dialogDrag
    >
      <el-form :model="form" label-positioin="right" label-width="80px">
        <el-form-item label="用户名:">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号:">
          <el-input v-model="form.tel" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱:">
          <el-input v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="授权状态:">
          <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </el-form-item>
        <el-form-item hidden>
          <el-input v-model="form.id" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogEditForm = false">取 消</el-button>
        <el-button type="primary" @click="dialogEditForm = false">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 修改权限 -->
    <el-dialog
      title="权限管理"
      class="ruleDialog"
      :visible.sync="ruleDialog"
      width="30%"
      v-dialogDrag
      center
    >
      <el-tree :data="treeData" show-checkbox node-key="id"></el-tree>
      <div slot="footer" class="dialog-footer">
        <el-button @click="ruleDialog = false">取 消</el-button>
        <el-button type="primary" @click="ruleDialog = false">确 定</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      treeData: [
        {
          id: 1,
          label: "网信中心",
          children: [
            {
              id: 11,
              label: "服务器",
              children: [
                {
                  id: 111,
                  label: "10.10.10.111"
                }
              ]
            },
            {
              id: 12,
              label: "数据库",
              children: [
                {
                  id: 121,
                  label: "10.10.10.121:3306"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "图书馆",
          children: [
            {
              id: 21,
              label: "服务器"
            },
            {
              id: 22,
              label: "数据库"
            }
          ]
        },
        {
          id: 3,
          label: "后勤部",
          children: [
            {
              id: 31,
              label: "服务器"
            },
            {
              id: 32,
              label: "数据库"
            }
          ]
        }
      ],
      ruleDialog: false,
      dialogEditForm: false,
      form: {},
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          identity: "网络安全管理员",
          tel:12345678901,
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
      ],
      value: true
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
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
.searchinput {
  width: 500px;
}
.btn-cre {
  margin-left: 100px;
}
.pagination {
  margin: 40px;
}
.delDialog {
  border-radius: 50px;
}
</style>
