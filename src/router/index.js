import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/grid',
    name: 'grid',
    component: () => import(/* webpackChunkName: "Grid" */ '../views/Grid.vue')
  },
  {
    path: '/cards',
    name: 'cards',
    component: () => import(/* webpackChunkName: "cards" */ '../views/Cards.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import(/* webpackChunkName: "form" */ '../views/Form.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
