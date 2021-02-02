import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/dashboard',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Consultation Stats',
          path: '',
          component: () => import('@/views/dashboard/Consultation'),
        },
      ],
    },
    {
      path: '/',
      components: {
        navbar: () => import('./views/web/components/landing/Navbar'),
        default: () => import('@/views/web/Landing'),
      },
    },
  ],
})
