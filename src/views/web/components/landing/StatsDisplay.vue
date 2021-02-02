<template>
  <!-- eslint-disable -->
  <div class="stats-display d-flex flex-row flex-wrap justify-content-around align-items-center bg-light mb-3">
    <div v-for="(value, propertyName) in stats" :key="propertyName" class="counter-holder">
      <h5 class="counter text-info">{{ value.count }}</h5>
      <h4 class="counter-title">{{ value.title }}</h4>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StatsDisplay',
    data () {
      return {
        stats: {
          doctor: {
            count: 200,
            title: 'Doctors Available',
            icon: 'https://www.flaticon.com/premium-icon/telemedicine_1698377?term=telemedicine&related_id=1698377',
          },
          consultations: {
            count: 400000,
            title: 'Successful Consultations',
            icon: 'https://www.flaticon.com/premium-icon/telemedicine_1698377?term=telemedicine&related_id=1698377',
          },
        },
      }
    },
  }
</script>

<style lang="scss" scoped>
  .stats-display {
    min-height: 100px;
    .counter-holder {
      text-align: center;
    }
  }
</style>
