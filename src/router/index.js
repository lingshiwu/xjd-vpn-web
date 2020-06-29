import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Home from '@/components/home'
import Regist from '@/components/regist'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/home',
      name: 'home',
      component: Home,
      children: [{
        path: '/netadmin',
        name: 'netadmin',
        component: () => import('@/components/users/netadmin.vue')
      }, {
        path: '/workadmin',
        name: 'workadmin',
        component: () => import('@/components/users/workadmin.vue')
      }, {
        path: '/worker',
        name: 'worker',
        component: () => import('@/components/users/worker.vue')
      }, {
        path: '/applyregist',
        name: 'applyregist',
        component: () => import('@/components/apply/applyregist.vue')
      }]
    }, {
      path: '/regist',
      name: 'regist',
      component: Regist
    }
  ]
})
