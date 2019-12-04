import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
Vue.use(require('vue-cookies'))

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // {
  //   path: '/',
  //   name: 'login',
  //   // route level code-splitting
  //   // this generates a separate chunk (Login.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/bugs',
    name: 'bugs',
    // route level code-splitting
    // this generates a separate chunk (bugs.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "bugs" */ '../views/Bugs.vue')
  },
  {
    path: '/roomType/:id',
    name: 'roomType',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/roomType.vue')
  },
  {
    path: '/Building/:id',
    name: 'Building',
    // route level code-splitting
    // this generates a separate chunk (Building.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Building" */ '../views/Building.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (Building.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Building" */ '../views/Login.vue')
  },
  {
    path: '/signUp',
    name: 'signUp',
    // route level code-splitting
    // this generates a separate chunk (Building.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Building" */ '../views/signUp.vue')
  },
  {
    path: '/forgetPass',
    name: 'forgetPass',
    // route level code-splitting
    // this generates a separate chunk (Building.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Building" */ '../views/forgetPass.vue')
  },
  {
    path: '/resetPass',
    name: 'resetPass',
    // route level code-splitting
    // this generates a separate chunk (Building.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Building" */ '../views/resetPass.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
