<template>
  <!-- eslint-disable -->
  <div class="container stats-container">
    <div class="stats-display d-flex flex-row flex-wrap align-items-center bg-info mb-3">
      <div v-for="(value, propertyName) in stats" :key="propertyName" class="counter-holder pt-3 pb-3">
        <!-- TODO: this is hardcoded for now. -->
        <img src="~@/assets/images/doctor_available_icon.png" class="mb-3" />
        <h3 class="counter text-white">{{ value.count }}</h3>
        <h5 class="counter-title text-white">{{ value.title }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
  var abbreviate = require('number-abbreviate')
  export default {
    name: 'StatsDisplay',
    data () {
      return {
        stats: {
          doctor: {
            count: abbreviate(200, 2),
            title: '(Doctors Available)',
            // icon: 'doctor_available_icon.png',
          },
          consultations: {
            count: abbreviate(400000, 2),
            title: '(Successful Consultations)',
            // icon: '~@/assets/images/telemed_consult_icon.png',
          },
        },
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/style/web/_stats_display.scss";
</style>
