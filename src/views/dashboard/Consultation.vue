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
        lg="4"
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
        lg="4"
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

      <v-col
        cols="12"
        sm="6"
        lg="4"
      >
        <div class="datepicker-trigger datepicker-filter">
          <input
            type="text"
            id="datepicker-trigger"
            placeholder="Select dates"
            :value="formatDates(this.datePicker.dateOne, this.datePicker.dateTwo)"
          >

          <AirbnbStyleDatepicker
            :trigger-element-id="'datepicker-trigger'"
            :mode="'range'"
            :fullscreen-mobile="true"
            :date-one="this.datePicker.dateOne"
            :date-two="this.datePicker.dateTwo"
            :end-date="this.datePicker.endDate"
            @date-one-selected="val => { this.datePicker.dateOne = val }"
            @date-two-selected="val => { this.datePicker.dateTwo = val }"
            @apply="getSuccessfulConsultationStats ()"
          />
        </div>
      </v-col>
    </v-row>
    <v-divider />
    <v-row>
      <v-col
        cols="12"
        sm="4"
        lg="4"
      >
        <base-material-stats-card
          color="success"
          icon="mdi-store"
          title="Consultations"
          :value="consultationStats.count"
          sub-icon="mdi-calendar"
          sub-text="Updated Last 24 Hours"
        />
      </v-col>
      <v-col
        cols="12"
        sm="4"
        lg="4"
      >
        <base-material-stats-card
          color="success"
          icon="mdi-store"
          title="Doctors Available"
          :value="doctorStats.approvedCount"
          sub-icon="mdi-calendar"
          sub-text="Updated Last 24 Hours"
        />
      </v-col>
      <v-col
        cols="12"
        sm="4"
        lg="4"
      >
        <base-material-stats-card
          color="success"
          icon="mdi-store"
          title="Patients Registered"
          :value="patientsRegistered"
          sub-icon="mdi-calendar"
          sub-text="Updated Last 24 Hours"
        />
      </v-col>
    </v-row>
    <v-row>
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
            <span class="caption grey--text font-weight-light">Consultation last 7 days Stats</span>
          </template>
        </base-material-chart-card>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        lg="6"
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
            <span class="caption grey--text font-weight-light">Consultation last 12 Months Stats</span>
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
  import format from 'date-fns/format'
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
              right: 10,
              bottom: 0,
              left: 15,
            },
          },
        },
        datePicker: {
          dateFormat: 'D MMM YYYY',
          dateOne: '',
          dateTwo: '',
          endDate: '',
        },
        patientsRegistered: 0,
        doctorStats: {
          approvedCount: 0,
          totalCount: 0,
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
      // TODO: single request API to fetch required data on page load.
      this.getSuccessfulConsultationStats()
      this.getCscMerchants()
      this.getSpecialities()
      this.updateDatePickerFields()
      this.getDoctorAvailableStats('on_page_load')
      this.getPatientStats()
    },
    methods: {
      getSuccessfulConsultationStats: function () {
        this.$http.post('/dashboard_consultations/stats', {
          consultation_filters: {
            merchant_ids: this.selectedMerchants,
            mapped_speciality_ids: this.selectedSpecialities,
            date_from: this.datePicker.dateOne,
            date_to: this.datePicker.dateTwo,
          },
        }).then((response) => {
          var consultationStats = response
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
          if (this.lastTwelveMonthsChart.options.high === 0) {
            this.lastTwelveMonthsChart.options.high = 100
          }
          if (this.lastSevenDaysChart.options.high === 0) {
            this.lastSevenDaysChart.options.high = 100
          }
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },
      getCscMerchants: function () {
        this.$http.get('/csc_merchants/index').then((response) => {
          this.cscMerchants = response
          this.merchantFilterTitle += ` (${this.cscMerchants.length})`
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },
      getSpecialities: function () {
        this.$http.get('/mapped_specialities/index').then((response) => {
          this.specialities = response
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
          this.getDoctorAvailableStats('on_speciaility_change')
        }
        this.getSuccessfulConsultationStats()
      },
      formatDates (dateOne, dateTwo) {
        let formattedDates = ''
        if (dateOne) {
          formattedDates = format(dateOne, this.datePicker.dateFormat)
        }
        if (dateTwo) {
          formattedDates += ' - ' + format(dateTwo, this.datePicker.dateFormat)
        }
        return formattedDates
      },
      updateDatePickerFields () {
        const d = new Date()
        const date = d.getDate()
        const month = d.getMonth()
        const year = d.getFullYear()
        // date format ('2021-02-20')
        // using a day before today
        this.datePicker.endDate = year + '-' + (month + 1) + '-' + (date - 1)
      },
      getDoctorAvailableStats: function (from) {
        if (from === 'on_page_load') {
          this.$http.get('/doctor_profiles/stats').then((response) => {
            if (response.approved_doctor_profiles) {
              this.doctorStats.approvedCount = response.approved_doctor_profiles.count
            }
          }).catch((error) => {
            // handle error
            console.log(error)
          })
        } else if (from === 'on_speciaility_change') {
          if (this.specialities) {
            let updatedDoctorApprovedCount = 0
            // iterate over mapped speciality
            this.specialities.forEach((speciality, index) => {
              console.log(this.selectedSpecialities)
              // filtering out the unselected specialities.
              if (this.selectedSpecialities.includes(speciality.id)) {
                const childSpecialities = speciality.child_specialities
                if (childSpecialities.doctor_stats) {
                  console.log(childSpecialities.doctor_stats)
                  updatedDoctorApprovedCount += childSpecialities.doctor_stats.total_approved_doctor_profiles_count
                }
              }
            })
            this.doctorStats.approvedCount = updatedDoctorApprovedCount
          }
        }
      },
      getPatientStats: function () {
        this.$http.get('/users/patients_stats').then((response) => {
          if (response.count) {
            this.patientsRegistered = response.count
          }
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },
    },
  }
</script>

<style lang='scss' unscoped>
  .datepicker-filter {
    margin-top: 30px;
    margin-bottom: 15px;
    background-color: white;
  }
</style>
