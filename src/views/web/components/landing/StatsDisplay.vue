<template>
  <!-- eslint-disable -->
  <div class="container stats-container">
    <div class="stats-display d-flex flex-row flex-nowrap align-items-center mb-3">
      <div v-for="(value, propertyName) in stats" :key="propertyName" class="counter-holder bg-info pt-3 pb-3">
        <img :src="value.icon" class="mb-3" />
        <h3 class="counter text-white">{{ value.count }}</h3>
        <p class="counter-title text-white">{{ value.title }}</p>
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
            icon: require('@/assets/images/doctor.svg'),
          },
          consultations: {
            count: abbreviate(400000, 2),
            title: '(Successful Consultations)',
            icon: require('@/assets/images/tick.svg'),
          },
        },
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/style/web/_stats_display.scss";
</style>
