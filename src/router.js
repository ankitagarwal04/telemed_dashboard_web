import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      redirect: '/dashboard/stats',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Consultation Stats',
          path: 'stats',
          component: () => import('@/views/dashboard/Consultation'),
        },
        {
          name: 'register',
          path: 'register_user',
          component: () => import('@/components/auth/Register.vue'),
        },
      ],
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/components/auth/Auth.vue'),
      redirect: '/auth/login',
      children: [
        {
          name: 'login',
          path: 'login',
          component: () => import('@/components/auth/Login.vue'),
          meta: { requireGuest: true },
        },
      ],
    },
    {
      path: '/',
      components: {
        navbar: () => import('./views/web/components/core/Navbar'),
        default: () => import('@/views/web/Landing'),
        footer: () => import('./views/web/components/core/Footer'),
      },
    },
  ],
})
