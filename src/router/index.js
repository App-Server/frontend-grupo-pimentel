import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/ze-do-bairro',
      name: 'ze-do-bairro',
      component: () => import('../views/ze-do-bairro.vue'),
    },
    {
      path: '/ultra',
      name: 'ultra',
      component: () => import('../views/ultra.vue'),
    },
  ],
})

export default router
