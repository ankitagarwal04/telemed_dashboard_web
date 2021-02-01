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
          icon="mdi-poll"
          :title="merchantFilterTitle"
          :is-contain-modal="true"
          :modal-button-text="merchantModalButtonText"
          sub-icon="mdi-tag"
          :sub-text="merchantFilterSubText"
          @show-modal="merchantListDialog = true"
        />
      </v-col>

      <v-col
        cols="12"
        sm="6"
        lg="6"
      >
        <base-material-stats-card
          color="info"
          icon="mdi-poll"
          :title="specialityFilterTitle"
          :is-contain-modal="true"
          :modal-button-text="specialityModalButtonText"
          sub-icon="mdi-tag"
          :sub-text="specialityFilterSubText"
          @show-modal="specialitiesListDialog = true"
        />
      </v-col>
    </v-row>
    <v-divider />
    <v-row>
      <v-col
        cols="12"
        sm="6"
        lg="6"
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
      <v-col
        cols="12"
        sm="6"
        lg="6"
      >
        <base-material-chart-card
          :data="lastSevenDaysChart.data"
          :options="lastSevenDaysChart.options"
          color="success"
          hover-reveal
          type="Line"
        >
          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  color="info"
                  icon
                  v-on="on"
                >
                  <v-icon
                    color="info"
                  >
                    mdi-refresh
                  </v-icon>
                </v-btn>
              </template>

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  light
                  icon
                  v-on="on"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <template v-slot:actions>
            <v-icon
              class="mr-1"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">last 7 days Stats</span>
          </template>
        </base-material-chart-card>
      </v-col>
      <v-col
        cols="12"
        sm="5"
        lg="5"
      >
        <base-material-chart-card
          :data="lastTwelveMonthsChart.data"
          :options="lastTwelveMonthsChart.options"
          color="success"
          hover-reveal
          type="Bar"
        >
          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  color="info"
                  icon
                  v-on="on"
                >
                  <v-icon
                    color="info"
                  >
                    mdi-refresh
                  </v-icon>
                </v-btn>
              </template>

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  light
                  icon
                  v-on="on"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <template v-slot:actions>
            <v-icon
              class="mr-1"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">last 12 Months Stats</span>
          </template>
        </base-material-chart-card>
      </v-col>
    </v-row>
    <filter-list-dialog
      :dialog-name="merchantListDialog"
      title="Select Merchant"
      :selected-item="selectedMerchants"
      :items="cscMerchants"
      @close-modal="closeFilterListDialog (merchantFilterTitle)"
      @update-selected-item="selectedMerchants=$event"
    />
    <filter-list-dialog
      :dialog-name="specialitiesListDialog"
      title="Select Speciality"
      :selected-item="selectedSpecialities"
      :items="specialities"
      @close-modal="closeFilterListDialog (specialityFilterTitle)"
      @update-selected-item="selectedSpecialities=$event"
    />
  </v-container>
</template>

<script>
  export default {
    name: 'Consultation',
    components: {
      FilterListDialog: () => import('@/components/FilterListDialog'),
    },
    data () {
      return {
        merchantFilterTitle: 'Merchants',
        specialityFilterTitle: 'Specialities',
        merchantFilterSubText: 'All Merchants',
        specialityFilterSubText: 'All Specialities',
        merchantModalButtonText: 'SELECT',
        specialityModalButtonText: 'SELECT',
        consultationStats: {
          count: 0,
        },
        cscMerchants: [],
        specialities: [],
        merchantListDialog: false,
        specialitiesListDialog: false,
        selectedMerchants: [],
        selectedSpecialities: [],
        lastSevenDaysChart: {
          data: {
            labels: [],
            series: [],
          },
          options: {
            lineSmooth: this.$chartist.Interpolation.cardinal({
              tension: 0,
            }),
            low: 0,
            high: 0, // recommended you to set the high as the biggest value + something for a better look
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            },
          },
        },
        lastTwelveMonthsChart: {
          data: {
            labels: [],
            series: [],
          },
          options: {
            lineSmooth: this.$chartist.Interpolation.cardinal({
              tension: 0,
            }),
            low: 0,
            high: 0, // recommended you to set the high as the biggest value + something for a better look
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            },
          },
        },
      }
    },
    watch: {
      selectedMerchants (newSelectedMerchants) {
        var response = this.updateFilterSubText(newSelectedMerchants, this.cscMerchants)
        this.merchantFilterSubText = response[0]
        this.merchantModalButtonText = response[1]
      },
      selectedSpecialities (newselectedSpecialities) {
        var response = this.updateFilterSubText(newselectedSpecialities, this.specialities)
        this.specialityFilterSubText = response[0]
        this.specialityModalButtonText = response[1]
      },
    },
    created () {
      this.getConsultationStats()
      this.getCscMerchants()
      this.getSpecialities()
    },
    methods: {
      getConsultationStats: function () {
        this.axios.post('http://localhost:3000/dashboard_consultations/stats', {
          consultation_filters: {
            merchant_ids: this.selectedMerchants,
            speciality_ids: this.selectedSpecialities,
          },
        }).then((response) => {
          var consultationStats = response.data.data
          var lastSevenDays = consultationStats.last_7_days
          var lastTwelveMonths = consultationStats.last_12_months
          var lastSevenDaysDataLabels = Object.keys(lastSevenDays)
          var lastSevenDaysDataSeries = [Object.values(lastSevenDays)]
          var lastTwelveMonthsDataLabels = Object.keys(lastTwelveMonths)
          var lastTwelveMonthsDataSeries = [Object.values(lastTwelveMonths)]

          this.consultationStats.count = consultationStats ? consultationStats.consultation_count : 0
          this.lastSevenDaysChart.data.labels = lastSevenDaysDataLabels
          this.lastSevenDaysChart.data.series = lastSevenDaysDataSeries
          this.lastSevenDaysChart.options.high = (Math.max(...lastSevenDaysDataSeries[0]) + Math.max(...lastSevenDaysDataSeries[0]) / 4)
          this.lastTwelveMonthsChart.data.labels = lastTwelveMonthsDataLabels
          this.lastTwelveMonthsChart.data.series = lastTwelveMonthsDataSeries
          this.lastTwelveMonthsChart.options.high = (Math.max(...lastTwelveMonthsDataSeries[0]) + Math.max(...lastTwelveMonthsDataSeries[0]) / 4)
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },
      getCscMerchants: function () {
        this.axios.get('http://localhost:3000/csc_merchants/index').then((response) => {
          this.cscMerchants = response.data.data
          this.merchantFilterTitle += ` (${this.cscMerchants.length})`
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },
      getSpecialities: function () {
        this.axios.get('http://localhost:3000/specialities/index').then((response) => {
          this.specialities = response.data.data
          this.specialityFilterTitle += ` (${this.specialities.length})`
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },
      updateFilterSubText: function (newSelectedFilters, filterDataItems) {
        if (newSelectedFilters.length > 0) {
          var selectedFilterNames = []
          var modalButtonText = ''
          var filterSubtext = ''
          newSelectedFilters.forEach((selectedFilterId, index) => {
            filterDataItems.forEach((item, index) => {
              if (item.id === selectedFilterId) {
                selectedFilterNames.push(item.name)
              }
            })
          })
          filterSubtext = selectedFilterNames.join(', ')
          modalButtonText = `SELECTED (${selectedFilterNames.length})`
        } else {
          filterSubtext = 'All Merchants'
          modalButtonText = 'SELECT'
        }
        return [filterSubtext, modalButtonText]
      },
      closeFilterListDialog: function (filterName) {
        if (filterName === this.merchantFilterTitle) {
          this.merchantListDialog = false
        } else if (filterName === this.specialityFilterTitle) {
          this.specialitiesListDialog = false
        }
        this.getConsultationStats()
      },
    },
  }
</script>
