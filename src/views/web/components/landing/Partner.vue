<template>
  <!-- eslint-disable -->
  <section class="partner-section">
    <div class="container">
      <div class="partner-header">
        <h4>Our Partners</h4>
      </div>
      <div class="card-deck flex-wrap mt-5">
        <div v-for="partner in partners" :key="partner.id" class="card partner-card-holder p-3 mb-3">
          <div class="partner-icon">
            <img class="card-img-top center" src="jiva.jpg" alt="partner.name">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Partner',
    data () {
      return {
        partners: [
          {
            id: 1,
            name: 'TELEMEDICINE',
          },
          {
            id: 2,
            name: 'DIAGNOSTIC SERVICES',
          },
          {
            id: 3,
            name: 'MEDICINES',
          },
          {
            id: 4,
            name: 'PRODUCTS',
          },
          {
            id: 5,
            name: 'HEALTH PACKAGES',
          },
          {
            id: 6,
            name: 'CSC WELLNESS CENTER',
          },
          {
            id: 7,
            name: 'DIGIGAON',
          },
          {
            id: 8,
            name: 'TRAINING',
          },
          {
            id: 9,
            name: 'TELEMEDICINE',
          },
          {
            id: 10,
            name: 'DIAGNOSTIC SERVICES',
          },
          {
            id: 11,
            name: 'MEDICINES',
          },
          {
            id: 12,
            name: 'PRODUCTS',
          },
          {
            id: 13,
            name: 'HEALTH PACKAGES',
          },
          {
            id: 14,
            name: 'CSC WELLNESS CENTER',
          },
          {
            id: 15,
            name: 'DIGIGAON',
          },
          {
            id: 16,
            name: 'TRAINING',
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/style/web/_partner.scss";
</style>
