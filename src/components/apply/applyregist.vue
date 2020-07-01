<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>审核申请</el-breadcrumb-item>
        <el-breadcrumb-item>注册申请</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <h2>注册申请表单</h2>
    <el-table :data="applyData" style="width: 100%" height="600">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column fixed type="index" label="编号" width="60"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="department" label="所属部门" width="120"></el-table-column>
      <el-table-column prop="mobilphone" label="手机号" width="150"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="200"></el-table-column>
      <el-table-column prop="zip" label="操作" width="300">
        <el-tooltip class="item" effect="dark" content="添加用户" placement="top">
          <el-button @click="addadmin" type="success" size="mini" icon="el-icon-check" circle></el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="修改信息" placement="top">
          <el-button
            @click="dialogEditForm=true"
            type="primary"
            size="mini"
            icon="el-icon-edit"
            circle
          ></el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="删除申请" placement="top">
          <el-button @click="delApply" type="danger" size="mini" icon="el-icon-delete" circle></el-button>
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
        <el-form-item label="所属部门:">
          <el-input v-model="form.department" autocomplete="on"></el-input>
        </el-form-item>
        <el-form-item label="手机号:">
          <el-input v-model="form.tel" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱:">
          <el-input v-model="form.email" autocomplete="off"></el-input>
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
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      value: true,
      form: {},
      dialogEditForm: false,
      applyData: [
        {
          name: "张三",
          department: "图书馆",
          mobilphone: "12345678910",
          email: "12345678910@qq.com"
        },
        {
          name: "李四",
          department: "计算机学院",
          mobilphone: "12345678910",
          email: "12345678910@qq.com"
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
    },
    addadmin() {
      this.$message.success("添加成功!");
    },
    delApply() {
      this.$confirm("确定删除此条申请?", "提示", {
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
<style scoped>
.pagination{
  margin-top: 50px;
}
</style>