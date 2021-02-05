<template>
  <!-- eslint-disable -->
  <section class="partner-section">
    <div class="container">
      <div class="partner-header text-center mb-5">
        <h4>Our Partners</h4>
      </div>
      <carousel
        :per-page=5
        :loop='true'
        :autoplay='true'
        class='ml-3 mr-3'
      >
        <slide v-for="partner in partners" :key="partner.id" class="partner-icon pr-3">
          <img class="card-img-top center" :src="partner.logo" alt="partner.name">
        </slide>
      </carousel>
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
            name: 'APOLLO',
            logo: require('@/assets/images/partners/apollo.jpg'),
          },
          {
            id: 2,
            name: 'BPPI',
            logo: require('@/assets/images/partners/bppi.jpg'),
          },
          {
            id: 3,
            name: 'DOC-ONLINE',
            logo: require('@/assets/images/partners/doc_online.jpg'),
          },
          {
            id: 4,
            name: 'INNOWAVE',
            logo: require('@/assets/images/partners/innowave.jpg'),
          },
          {
            id: 5,
            name: 'JIVA',
            logo: require('@/assets/images/partners/jiva.jpg'),
          },
          {
            id: 6,
            name: 'MEDANTA',
            logo: require('@/assets/images/partners/medanta.jpg'),
          },
          {
            id: 7,
            name: 'PATANJALI',
            logo: require('@/assets/images/partners/patanjali.jpg'),
          },
          {
            id: 8,
            name: 'PHFI',
            logo: require('@/assets/images/partners/phfi.jpg'),
          },
          {
            id: 9,
            name: 'WELCOME CURE',
            logo: require('@/assets/images/partners/welcome_cure.jpg'),
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/style/web/_partner.scss";
</style>
