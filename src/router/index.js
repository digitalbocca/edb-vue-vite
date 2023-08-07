import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/views/home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      name: 'Home'
    }
  ]
})

export default router
