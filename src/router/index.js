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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ze-do-bairro.vue'),
    },
  ],
})

export default router
