import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/roomType',
    name: 'roomType',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/roomType.vue')
  },
  {
    path: '/Building',
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
