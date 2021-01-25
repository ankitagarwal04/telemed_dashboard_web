<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
  >
    <v-row>
      <v-col
        cols="12"
        sm="6"
        lg="6"
      >
        <base-material-stats-card
          color="info"
          icon="mdi-twitter"
          title="Merchants"
          value="+245"
          sub-icon="mdi-tag"
          sub-text="All Merchants"
        />
      </v-col>

      <v-col
        cols="12"
        sm="6"
        lg="6"
      >
        <base-material-stats-card
          color="primary"
          icon="mdi-poll"
          title="Specialities"
          value="75.521"
          sub-icon="mdi-tag"
          sub-text="All Specialities"
        />
      </v-col>
    </v-row>
    <v-divider />
    <v-row>
      <v-col
        cols="12"
        sm="12"
        lg="12"
      >
        <base-material-stats-card
          color="success"
          icon="mdi-store"
          title="Consultations"
          v-bind:value="consultationStats.count"
          sub-icon="mdi-calendar"
          sub-text="Last 24 Hours"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Consultation',
    data () {
      return {
        consultationStats: {
          count: '0',
        },
      }
    },
    created () {
      this.getConsultationStats()
    },
    methods: {
      getConsultationStats: function () {
        this.axios.get('http://localhost:3000/dashboard_consultations/stats').then((response) => {
          console.log(response)
          var consultationStats = response.data.data
          this.consultationStats.count = consultationStats ? consultationStats.consultation_count : 0
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },
    },
  }
</script>
