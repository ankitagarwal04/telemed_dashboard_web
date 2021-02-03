<template>
  <b-navbar
    toggleable="lg"
    type="light"
    variant="light"
  >
    <b-navbar-brand href="#">
      <img src='~@/assets/images/csc_logo.png'>
      <span>Telemedicine</span>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse
      id="nav-collapse"
      is-nav
    >
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">
          <span>VLE</span>
        </b-nav-item>
        <b-nav-item href="#">
          Doctor
        </b-nav-item>
        <b-nav-item href="/dashboard">
          Dashboard
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
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
