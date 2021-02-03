<template>
  <section class="about-section">
    <div class="container bg-dark">
      <div class="about-us d-flex flex-row flex-wrap align-items-center bg-white mb-3">
        <div class="about-media">
          <img src="~@/assets/images/about.jpeg">
        </div>
        <div class="about-content">
          <h4>About Us</h4>
          <p>The Government of India has formulated the National E-Governance Plan with the vision of providing all government services in an integrated manner at the doorstep of the citizen, at an affordable cost. The NeGP initiatives consist of 26 Central, State and Integrated Mission Mode Projects (MMPs) along with 8 other support components for rapid introduction of e-governance in the country. The NeGP envisions a three pillar model for delivery of “web-enabled Anytime, Anywhere access” to information and services in rural India.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'About',
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/style/web/_about.scss";
</style>
