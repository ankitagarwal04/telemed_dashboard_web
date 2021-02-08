<template>
  <!-- eslint-disable -->
  <b-navbar
    toggleable="lg"
    type="light"
    variant="light"
  >
    <b-navbar-brand href="#">
      <img src="~@/assets/images/csc_logo.png">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse
      id="nav-collapse"
      class="justify-content-center"
      is-nav
    >
      <b-navbar-nav>
        <b-nav-item href="#" class="">
          <b-button>VLE</b-button>
        </b-nav-item>
        <b-nav-item href="#" class="">
          <b-button>Doctor</b-button>
        </b-nav-item>
        <b-nav-item href="/dashboard" class="">
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
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/style/web/_navbar.scss";
</style>
