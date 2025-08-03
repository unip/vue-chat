import ChatLayout from '@/layouts/ChatLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/room/:roomId',
      name: 'room',
      component: ChatLayout,
    },
    {
      path: '/',
      redirect: '/room/general',
    },
    {
      path: '/room',
      redirect: '/room/general',
    },
  ],
})

export default router
