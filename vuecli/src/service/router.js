import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import Rollback from '@/pages/Rollback.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/rollback',
      name: 'rollback',
      component: Rollback
    }
  ]
})
