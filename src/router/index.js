import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login/login'
import { resolve } from 'url';
import dragable from '@/pages/dragable/dragable'
import main from '../pages/common/index.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/dragable',
      name: 'dragable',
      component: dragable
    },
    {
      path:'/main',
      component:main
    }

  ]
})
