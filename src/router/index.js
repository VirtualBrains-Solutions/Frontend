import { createRouter, createWebHistory } from 'vue-router'
import ScenariosView from "../views/ScenariosView.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/escenarios'
    },
    {
      path: '/escenarios',
      name: 'home',
      component: ScenariosView
    },
  ]
})

export default router
