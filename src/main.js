// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/base.css'

// 引入自定义指令
import "./plugins/dialogDrag/directives";
// import axios from 'axios'
// Vue.prototype.$http=axios
//自己的插件
import MyPlugin from '@/plugins/http.js'

// 导入NProgress, 包对应的JS和CSS
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import router from './router'

router.beforeEach((to,from,next)=>{
  NProgress.start()
  next()
})
router.afterEach(()=>{
  NProgress.done()
})


Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(MyPlugin);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
