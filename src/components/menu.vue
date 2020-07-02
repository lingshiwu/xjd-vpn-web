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
          <el-dropdown>
            <el-button type="text" icon="el-icon-user">我的</el-button>
            <el-dropdown-menu>
              <el-dropdown-item index="man">个人中心</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="aside" width="200px" background-color="#545c64">
        <!-- 开启路由模式 -->
        <el-menu
          :router="true"
          @open="handleOpen"
          @close="handleClose"
          default-active="2"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :unique-opened="true"
        >
          <el-menu-item index="home">
            <i class="el-icon-setting"></i>
            <span slot="title">首页</span>
          </el-menu-item>
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
                <el-badge value="new">
                  <i class="el-icon-s-order"></i>
                  <span>注册申请</span>
                </el-badge>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>部门管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="depart">
                <i class="el-icon-menu"></i>
                <span>部门资产</span>
              </el-menu-item>
              <el-menu-item index="person">
                <i class="el-icon-menu"></i>
                <span>个人资产</span>
              </el-menu-item>
              <el-menu-item index="short">
                <i class="el-icon-menu"></i>
                <span>临时资产</span>
              </el-menu-item>
              <el-menu-item index="history">
                <i class="el-icon-menu"></i>
                <span>历史资产</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="log">
            <i class="el-icon-setting"></i>
            <span slot="title">日志查看</span>
          </el-menu-item>
          <el-menu-item index="man">
            <i class="el-icon-setting"></i>
            <span slot="title">我的信息</span>
          </el-menu-item>
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
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
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