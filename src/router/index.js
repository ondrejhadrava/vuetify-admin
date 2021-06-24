import Vue from 'vue'
import VueRouter from 'vue-router'
import Clients from '../views/Clients'
import Home from '../views/Home'
import Mail from '../views/Mail'
import Settings from '../views/Settings'
import Statistics from '../views/Statistics'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/clients',
    name: 'Clients',
    component: Clients
  },
  {
    path: '/mail',
    name: 'Mail',
    component: Mail
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: Statistics
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
