import Vue from 'vue'
import Router from 'vue-router'
import count from '@/components/count'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      // component: () => import('components/home/home')
      component: () => import('components/count')
    }
  ]
})
