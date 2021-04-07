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
    <b-nav-item-dropdown
      v-if="isLoggedIn"
      class="user-profile-dropdown"
    >
      <!-- Using 'button-content' slot -->
      <template #button-content>
        <font-awesome-icon
          :icon="['fa', 'user']"
          class="icons-size"
          size="2x"
        />
      </template>
      <b-nav-text>
        {{ userEmail }}
      </b-nav-text>
      <b-nav-text>
        {{ userRole }}
      </b-nav-text>
      <b-dropdown-item
        href="#"
        @click="handleSignOut()"
      >
        Sign Out
      </b-dropdown-item>
    </b-nav-item-dropdown>
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
      currentUser: null,
    }),

    computed: {
      ...mapState(['drawer']),
      isLoggedIn () {
        return this.$store.getters.loggedIn
      },
      userEmail () {
        if (this.currentUser) {
          return this.currentUser.email
        }
        return null
      },
      userRole () {
        if (this.currentUser) {
          return this.currentUser.role
        }
        return null
      },
    },

    created () {
      this.getUser()
    },

    methods: {
      ...mapMutations({
        setDrawer: 'SET_DRAWER',
      }),
      handleSignOut: function () {
        this.$store.dispatch('destroyToken').then(response => {
          this.$router.push('/auth/login')
        })
      },
      getUser (field) {
        if (this.$store.getters.loggedIn) {
          this.currentUser = this.$store.getters.getUser
        }
      },
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
    .user-profile-dropdown {
      list-style: none;
      .navbar-text {
        color: #4caf50;
        padding: 0.25rem 1.5rem;
      }
    }
  }
</style>
