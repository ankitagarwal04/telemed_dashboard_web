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
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          name: 'ConsultationStats',
          path: 'stats',
          component: () => import('@/views/dashboard/stats/Consultation'),
        },
        {
          name: 'RegisteredUsers',
          path: 'registered_users',
          component: () => import('@/views/dashboard/RegisteredUsers'),
          meta: {
            requiresAdmin: true,
          },
        },
        {
          name: 'Users',
          path: 'users',
          component: () => import('@/views/dashboard/users/default'),
          meta: {
            requiresAdmin: true,
          },
          children: [
            {
              name: 'Create',
              path: 'create',
              component: () => import('@/views/dashboard/users/create'),
            },
            {
              name: 'Update',
              path: ':id',
              component: () => import('@/views/dashboard/users/update'),
            },
          ],
        },
        {
          name: 'ConsultationsList',
          path: 'consultations_list',
          component: () => import('@/views/dashboard/ConsultationsList'),
        },
        {
          name: 'ConsultationReports',
          path: 'consultation_reports',
          component: () => import('@/views/dashboard/ConsultationReports'),
        },
      ],
    },
    {
      path: '/auth',
      name: 'auth',
      components: {
        navbar: () => import('./views/web/components/core/Navbar'),
        default: () => import('@/components/auth/Auth.vue'),
      },
      redirect: '/auth/login',
      children: [
        {
          name: 'Login',
          path: 'login',
          component: () => import('@/components/auth/Login.vue'),
          meta: { requireGuest: true },
        },
        {
          name: 'ForgotPassword',
          path: 'forgot_password',
          component: () => import('@/components/auth/ForgotPassword.vue'),
          meta: { requireGuest: true },
        },
        {
          name: 'ResetPassword',
          path: 'reset_password',
          component: () => import('@/components/auth/ResetPassword.vue'),
          meta: { requireGuest: true },
        },
      ],
    },
    {
      name: 'root',
      path: '/',
      components: {
        navbar: () => import('./views/web/components/core/Navbar'),
        default: () => import('@/views/web/Landing'),
        footer: () => import('./views/web/components/core/Footer'),
      },
    },
  ],
})
