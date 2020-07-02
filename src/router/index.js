import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Menu from '@/components/menu'
import Regist from '@/components/regist'



const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: 'login',
      name: 'login',
      component: Login
    }, {
      path: 'regist',
      name: 'regist',
      component: Regist
    }, {
      path: '',
      name: 'menu',
      component: Menu,
      children: [{
        path: 'home',
        name: 'home',
        component: () => import('@/components/home/home.vue')
      }, {
        path: 'netadmin',
        name: 'netadmin',
        component: () => import('@/components/users/netadmin.vue')
      }, {
        path: 'workadmin',
        name: 'workadmin',
        component: () => import('@/components/users/workadmin.vue')
      }, {
        path: 'worker',
        name: 'worker',
        component: () => import('@/components/users/worker.vue')
      }, {
        path: 'applyregist',
        name: 'applyregist',
        component: () => import('@/components/apply/applyregist.vue')
      }, {
        path: 'log',
        name: 'log',
        component: () => import('@/components/logman/log.vue')
      }, {
        path: 'depart',
        name: 'depart',
        component: () => import('@/components/department/depart.vue')
      }, {
        path: 'person',
        name: 'person',
        component: () => import('@/components/department/person.vue')
      }, {
        path: 'history',
        name: 'history',
        component: () => import('@/components/department/history.vue')
      },{
        path: 'man',
        name: 'man',
        component: () => import('@/components/man.vue')
      },{
        path: 'short',
        name: 'short',
        component: () => import('@/components/department/short.vue')
      }
      ]
    }
  ]
})
