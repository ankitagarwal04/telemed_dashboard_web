<template>
  <v-app-bar
    id="app-bar"
    absolute
    app
    color="white"
    flat
    height="50"
    class="dashboard-app-bar"
  >
    <v-icon
      class="mr-3 drawer-toggle"
      @click="setDrawer(!drawer)"
    >
      mdi-format-list-bulleted
    </v-icon>
    <v-toolbar-title
      class="hidden-sm-and-down font-weight-normal"
    >
      Telemedicine
    </v-toolbar-title>

    <v-spacer />

    <a href="#">
      <v-img
        contain
        src="~@/assets/images/digital_india_logo.png"
      />
    </a>
  </v-app-bar>
</template>

<script>
  // Components
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'DashboardCoreAppBar',
    props: {
      value: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      notifications: [
        'Mike John Responded to your email',
        'You have 5 new tasks',
        'You\'re now friends with Andrew',
        'Another Notification',
        'Another one',
      ],
    }),

    computed: {
      ...mapState(['drawer']),
    },

    methods: {
      ...mapMutations({
        setDrawer: 'SET_DRAWER',
      }),
    },
  }
</script>

<style lang="scss" scoped>
  .dashboard-app-bar {
    .drawer-toggle {
      color: $primary-dark-blue-color;
    }
    .v-image {
      height: 50px;
      width: 150px;
    }
  }
</style>
