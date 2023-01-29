import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/:user/:rep/issues',
    name: 'issues',
    component: () => import('../views/issues.vue')
  },
  {
    path: '/:user/:rep/issue/:id',
    name: 'issue',
    component: () => import('../views/issue.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
