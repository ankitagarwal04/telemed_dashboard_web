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
          is-contain-modal=true
          sub-icon="mdi-tag"
          sub-text="All Merchants"
          @show-modal="filterListDialog = true"
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
          is-contain-modal=true
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
          :value="consultationStats.count"
          sub-icon="mdi-calendar"
          sub-text="Last 24 Hours"
        />
      </v-col>
    </v-row>
    <v-dialog
      v-model="filterListDialog"
      max-width="500"
    >
      <v-card>
        <v-card-title>
          Select Merchant

          <v-spacer />

          <v-icon
            aria-label="Close"
            @click="filterListDialog = false"
          >
            mdi-close
          </v-icon>
        </v-card-title>
        <v-divider />
        <v-list dense>
          <v-list-item-group
            v-model="selectedMerchant"
            color="primary"
            multiple=true
          >
            <v-list-item
              v-for="(merchant, index) in cscMerchants"
              :key="index"
              :value="merchant.id"
            >
              <v-list-item-content>
                <v-list-item-title v-text="merchant.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  export default {
    name: 'Consultation',
    // components: {
    //   Dialog: () => import('./components/Dialog'),
    // },
    data () {
      return {
        selectedMerchant: [],
        filterListDialog: false,
        consultationStats: {
          count: '0',
        },
        cscMerchants: [],
        specialities: [],
      }
    },
    created () {
      this.getConsultationStats()
      this.getCscMerchants()
      this.getSpecialities()
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
      getCscMerchants: function () {
        this.axios.get('http://localhost:3000/csc_merchants/index').then((response) => {
          console.log(response)
          this.cscMerchants = response.data.data
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },
      getSpecialities: function () {
        this.axios.get('http://localhost:3000/specialities/index').then((response) => {
          console.log(response)
          this.specialities = response.data.data
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },
    },
  }
</script>
