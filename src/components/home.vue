<template>
  <el-container>
    <el-header>
      <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <div>
            <span>VPN管理系统</span>
          </div>
        </el-col>
        <el-col :span="6">
          <el-button type="text">退出</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="aside" width="200px" background-color="#545c64">
        <!-- 开启路由模式 -->
        <el-menu
          :router="true"
          default-active="2"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          unique-opened="true"
        >
          <el-submenu index="home">
            <template slot="title">
              <i class="el-icon-s-marketing"></i>
              <span>首页</span>
            </template>
          </el-submenu>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用戶管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="netadmin">
                <i class="el-icon-menu"></i>
                <span>网络安全管理员</span>
              </el-menu-item>
              <el-menu-item index="workadmin">
                <i class="el-icon-menu"></i>
                <span>业务管理员</span>
              </el-menu-item>
              <el-menu-item index="worker">
                <i class="el-icon-menu"></i>
                <span>乙方人员</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>审核申请</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="applyregist">
                <i class="el-icon-s-order"></i>
                <span>注册申请</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>部门管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">
                <i class="el-icon-menu"></i>
                <span>部门资产</span>
              </el-menu-item>
              <el-menu-item index="3-2">
                <i class="el-icon-menu"></i>
                <span>个人资产</span>
              </el-menu-item>
              <el-menu-item index="3-3">
                <i class="el-icon-menu"></i>
                <span>历史资产</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>日志管理</span>
            </template>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
}
.el-header {
  background-color: #061debcb;
  color: rgb(255, 249, 249);
  text-align: center;
  line-height: 60px;
}

.aside {
  background-color: #545c64;
}
.main {
  background-color: white;
}
</style>