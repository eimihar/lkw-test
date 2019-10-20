import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import BackendPage from '../views/BackendPage.vue'
import StudentRoutes from './student-routes.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/auth/login',
    name: 'login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'backend',
    component: BackendPage,
    children: [
      {
        name:  'student',
        path: '/student',
        children: StudentRoutes
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
