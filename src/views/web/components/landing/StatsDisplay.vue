<template>
  <!-- eslint-disable -->
  <div class="container stats-container">
    <div class="stats-display d-flex flex-row flex-nowrap align-items-center mb-3">
      <div v-for="(value, propertyName) in stats" :key="propertyName" class="counter-holder bg-info pt-3 pb-3">
        <img :src="value.icon" class="mb-3" />
        <h3 class="counter text-white">{{ value.abbreviated_count }}</h3>
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
            count: '',
            abbreviated_count: '',
            title: '(Doctors Available)',
            icon: require('@/assets/images/doctor.svg'),
          },
          consultations: {
            count: '',
            abbreviated_count: '',
            title: '(Lives Touched)',
            icon: require('@/assets/images/tick.svg'),
          },
          call_duration: {
            count: '',
            abbreviated_count: '3k hrs',
            title: '(Call Duration)',
            icon: require('@/assets/images/tick.svg'),
          },
        },
      }
    },
    created () {
      this.getConsultationStats()
      this.getAvailableDoctorStats()
    },
    methods: {
      getConsultationStats: function () {
        this.$http.get('/dashboard_consultations/stats', { params: { request_from: 'landing_page' } }).then((response) => {
          const consultationStats = response
          if (consultationStats) {
            this.stats.consultations.count = consultationStats.consultation_count
            this.stats.consultations.abbreviated_count = abbreviate(this.stats.consultations.count, 2)
          }
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },
      getAvailableDoctorStats: function () {
        this.$http.get('/doctor_profiles/stats', { params: { request_from: 'landing_page' } }).then((response) => {
          const availableDoctorStats = response
          if (availableDoctorStats && availableDoctorStats.approved_doctor_profiles) {
            this.stats.doctor.count = availableDoctorStats.approved_doctor_profiles.count
            this.stats.doctor.abbreviated_count = abbreviate(this.stats.doctor.count, 2)
          }
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },
    },

  }
</script>

<style lang="scss" scoped>
  @import "@/assets/style/web/_stats_display.scss";
</style>
