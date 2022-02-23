import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/guide',
      name: 'guide',
      component: () => import('../views/Guide.vue')
    },
    {
      path: '/components',
      name: 'components',
      component: () => import('../views/Components.vue'),
      children:[
        {path:'use-mouse',component:() => import('../views/Components.vue')}
      ]
    },
    {
      path: '/resource',
      name: 'resource',
      component: () => import('../components/vueUse/use-mouse.vue')
    }
  ]
})

export default router
