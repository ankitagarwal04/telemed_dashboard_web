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
        <b-nav-item href="#" class="pr-3">
          <span>VLE</span>
        </b-nav-item>
        <b-nav-item href="#" class="pr-3">
          <span>Doctor</span>
        </b-nav-item>
        <b-nav-item href="/dashboard" class="pr-3">
          <span>Dashboard</span>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>

    <b-navbar-brand href="#">
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
