import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import BackendPage from '../views/BackendPage.vue'
import StudentRoutes from './student-routes.js'
import AdminRoutes from './admin-routes'

import middlewarePipeline from "./middlewarePipeline";
import store from '../store'
import ErrorPage from '../views/404.vue'
import StudentPage from '../views/backend/StudentPage.vue'
import AdminPage from '../views/backend/AdminPage.vue'

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
        path: 'student',
        component: StudentPage,
        children: StudentRoutes
      },
      {
        name: 'admin',
        path: 'admin',
        component: AdminPage,
        children: AdminRoutes
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
  },
  {
    name: 'error',
    path: '*',
    component: ErrorPage
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // if (!['login'].includes(to.name))
  //   return next({name: 'login'});

  // middleware.
  if (!to.meta.middleware)
    return next();

  const middleware = to.meta.middleware;

  const context = {
    to, from, next, store
  };

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })
});

export default router
