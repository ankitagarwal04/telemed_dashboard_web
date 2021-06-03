<template>
  <!-- eslint-disable -->
  <b-navbar
    toggleable="lg"
    type="light"
    variant="light"
  >
    <b-navbar-brand href="/">
      <img src="~@/assets/images/csc_logo.png">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse
      id="nav-collapse"
      class="justify-content-center"
      is-nav
    >
      <!-- TODO: fix these hardcoded links-->
      <b-navbar-nav>
        <b-nav-item :href="vleUrl" class="">
          <b-button>VLE</b-button>
        </b-nav-item>
        <b-nav-item :href="doctorUrl" class="">
          <b-button>Doctor</b-button>
        </b-nav-item>
        <b-nav-item href="/auth/login" class="">
          <b-button>Dashboard</b-button>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>

    <b-navbar-brand>
      <img src="~@/assets/images/digital_india_logo.png">
    </b-navbar-brand>

  </b-navbar>
</template>

<script>
  export default {
    name: 'Navbar',
    data () {
      return {
        vleUrl: process.env.VUE_APP_VLE_URL,
        doctorUrl: process.env.VUE_APP_DOCTOR_URL,
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/style/web/_navbar.scss";
</style>
