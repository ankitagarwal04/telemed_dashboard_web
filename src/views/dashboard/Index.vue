<template>
  <v-app>
    <dashboard-core-app-bar />

    <dashboard-core-drawer :items="getItems" />

    <dashboard-core-view />
  </v-app>
</template>

<script>
  export default {
    name: 'DashboardIndex',

    components: {
      DashboardCoreAppBar: () => import('./components/core/AppBar'),
      DashboardCoreDrawer: () => import('./components/core/Drawer'),
      DashboardCoreView: () => import('./components/core/View'),
    },

    data: () => ({
      expandOnHover: false,
    }),
    computed: {
      getItems () {
        const items = [
          {
            icon: 'mdi-home-outline',
            title: 'Landing',
            to: '/',
          },
          {
            icon: 'mdi-poll',
            title: 'Stats',
            to: '/dashboard/stats',
          },
          {
            icon: 'mdi-home-outline',
            title: 'Consultations',
            to: '/dashboard/consultations_report',
          },
        ]
        if (this.$store.getters.isAdmin) {
          items.push({
            icon: 'mdi-home-outline',
            title: 'Users',
            to: '/dashboard/registered_users',
          })
          items.push({
            icon: 'mdi-home-outline',
            title: 'Register User',
            to: '/dashboard/users/create',
          })
        }
        return items
      },
    },
  }
</script>
