<template>
  <v-app-bar
    id="app-bar"
    absolute
    app
    color="white"
    flat
    height="50"
  >
    <v-btn
      class="mr-3"
      elevation="1"
      fab
      small
      @click="setDrawer(!drawer)"
    >
      <v-icon>
        mdi-format-list-bulleted
      </v-icon>
    </v-btn>
    <v-toolbar-title
      class="hidden-sm-and-down font-weight-normal"
    >
      Telemedicine
    </v-toolbar-title>

    <v-spacer />

    <a href="#">
      <img src="https://portal.csc.gov.in/assets/img/digiindia.png">
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
