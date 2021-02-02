<template>
  <!-- eslint-disable -->
  <b-navbar
    toggleable="lg"
    type="dark"
    variant="dark"
    fixed="top"
  >
    <b-navbar-brand href="#">
      <img src="logo.png">
      <span>Telemed</span>
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
          Statistics
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
</script>

<style lang="scss">
  @import "@/assets/style/web/_navbar.scss";
</style>
