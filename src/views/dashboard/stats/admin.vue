<template>
  <!-- section used instead of v-container because defining fluid inside it wasn't working -->
  <section
    id="consultation"
    class="container-fluid dashboard-consultation mt-8"
  >
    <!-- filters -->
    <v-row>
      <v-col
        cols="12"
        md="6"
        lg="4"
        xl="4"
      >
        <stats-card
          :color="getStatsCardIconBgColor('filter')"
          :icon="['fas', 'hospital']"
          outer-icon-bg-color="rgb(25,156,57, 0.7)"
          icon-bg-color="rgb(25,156,57)"
          :is-contain-modal="true"
          :modal-button-text="merchantFilterTitle"
          sub-icon="mdi-tag"
          :sub-text="merchantFilterSubText"
          :value="merchantFilterValue"
          @show-modal="merchantListDialog = true"
        />
      </v-col>

      <v-col
        cols="12"
        md="6"
        lg="4"
        xl="4"
      >
        <stats-card
          :color="getStatsCardIconBgColor('filter')"
          :icon="['fa', 'medkit']"
          outer-icon-bg-color="rgb(241, 154, 62, 0.7)"
          icon-bg-color="rgb(241, 154, 62)"
          :is-contain-modal="true"
          :modal-button-text="specialityFilterTitle"
          sub-icon="mdi-tag"
          :sub-text="specialityFilterSubText"
          :value="specialityFilterValue"
          @show-modal="specialitiesListDialog = true"
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
        lg="4"
        xl="4"
      >
        <!-- on change of dates, required data is also filtered. -->
        <stats-card
          :color="getStatsCardIconBgColor('filter')"
          :icon="['fas', 'calendar']"
          outer-icon-bg-color="rgb(238, 180, 179, 0.7)"
          icon-bg-color="rgb(238, 180, 179)"
          title="Date Picker"
          sub-icon="mdi-tag"
          :is-date-picker="true"
          :sub-text="datePicker.subText"
          :date-picker="datePicker"
          @format-dates="formatDates($event)"
          @reset-dates="resetDates()"
        />
      </v-col>
    </v-row>
    <hr>
    <!-- Stats -->
    <v-row>
      <v-col
        cols="12"
        sm="6"
        lg="4"
      >
        <stats-card
          :color="getStatsCardIconBgColor('stats')"
          :icon="['fa', 'rupee-sign']"
          outer-icon-bg-color="rgb(93, 162, 113, 0.7)"
          icon-bg-color="rgb(93, 162, 113)"
          title="Payment"
          :value="paymentStats.totalAmount"
          sub-icon="mdi-calendar"
          sub-text="Updated Last 24 Hours"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        lg="4"
      >
        <stats-card
          :color="getStatsCardIconBgColor('stats')"
          :icon="['fa', 'user-md']"
          outer-icon-bg-color="rgb(137, 6, 32, 0.7)"
          icon-bg-color="rgb(137, 6, 32)"
          title="Doctors Available"
          :value="doctorStats.approvedCount"
          sub-icon="mdi-calendar"
          sub-text="Updated Last 24 Hours"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        lg="4"
      >
        <stats-card
          :color="getStatsCardIconBgColor('stats')"
          :icon="['fa', 'hospital-user']"
          outer-icon-bg-color="rgb(32, 129, 195, 0.7)"
          icon-bg-color="rgb(32, 129, 195)"
          title="Patients Registered"
          :value="patientStats.count"
          sub-icon="mdi-calendar"
          sub-text="Updated Last 24 Hours"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        lg="4"
      >
        <stats-card
          :color="getStatsCardIconBgColor('stats')"
          :icon="['fa', 'video']"
          outer-icon-bg-color="rgb(64, 112, 118, 0.7)"
          icon-bg-color="rgb(64, 112, 118)"
          title="Call Durations"
          :value="callDurationStats.totalCallDuration"
          :sub-stats="getSubStats('call_duration')"
          sub-icon="mdi-calendar"
          sub-text="Updated Last 24 Hours"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        lg="4"
      >
        <stats-card
          :color="getStatsCardIconBgColor('stats')"
          :icon="['fas', 'laptop-medical']"
          outer-icon-bg-color="rgb(160, 70, 104, 0.7)"
          icon-bg-color="rgb(160, 70, 104)"
          title="Consultations"
          :value="consultationStats.stats.total"
          :sub-stats="getSubStats('consultation')"
          sub-icon="mdi-calendar"
          sub-text="Updated Last 24 Hours"
        />
      </v-col>
    </v-row>
    <!-- Graphs -->
    <v-row class="dashboard-graph">
      <v-col
        cols="12"
        sm="12"
        lg="6"
      >
        <base-material-chart-card
          :data="consultationStats.grouppedByDay.data"
          :options="consultationStats.grouppedByDay.options"
          hover-reveal
          type="Line"
        >
          <h4 class="card-title font-weight-light mt-2 ml-2">
            <!-- Website Views -->
            {{ consultationStats.title }}
          </h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            <!-- Last Campaign Performance -->
            {{ consultationStats.grouppedByDay.subTitle }}
          </p>
          <template v-slot:actions>
            <v-icon
              class="mr-1"
            >
              mdi-clock-outline
            </v-icon>
            <span class="h5 mb-0 caption black--text font-weight-dark">Consultations last 7 days</span>
          </template>
        </base-material-chart-card>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        lg="6"
      >
        <base-material-chart-card
          :data="consultationStats.grouppedByMonth.data"
          :options="consultationStats.grouppedByMonth.options"
          hover-reveal
          type="Bar"
        >
          <h4 class="card-title font-weight-light mt-2 ml-2">
            {{ consultationStats.title }}
          </h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            {{ consultationStats.grouppedByMonth.subTitle }}
          </p>
          <template v-slot:actions>
            <v-icon
              class="mr-1"
            >
              mdi-clock-outline
            </v-icon>
            <span class="h5 mb-0 caption black--text font-weight-dark">Consultations last 12 Months</span>
          </template>
        </base-material-chart-card>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        lg="6"
      >
        <base-material-chart-card
          :data="doctorStats.grouppedByWeek.data"
          :options="doctorStats.grouppedByWeek.options"
          hover-reveal
          type="Line"
        >
          <h4 class="card-title font-weight-light mt-2 ml-2">
            {{ doctorStats.title }}
          </h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            {{ doctorStats.grouppedByWeek.subTitle }}
          </p>
          <template v-slot:actions>
            <v-icon
              class="mr-1"
            >
              mdi-clock-outline
            </v-icon>
            <span class="h5 mb-0 caption black--text font-weight-dark">Doctor Registeration last weeks</span>
          </template>
        </base-material-chart-card>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        lg="6"
      >
        <base-material-chart-card
          :data="doctorStats.grouppedByMonth.data"
          :options="doctorStats.grouppedByMonth.options"
          hover-reveal
          type="Bar"
        >
          <h4 class="card-title font-weight-light mt-2 ml-2">
            {{ doctorStats.title }}
          </h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            {{ doctorStats.grouppedByMonth.subTitle }}
          </p>
          <template v-slot:actions>
            <v-icon
              class="mr-1"
            >
              mdi-clock-outline
            </v-icon>
            <span class="h5 mb-0 caption black--text font-weight-dark">Doctor Registeration last 12 Months</span>
          </template>
        </base-material-chart-card>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        lg="6"
      >
        <base-material-chart-card
          :data="patientStats.grouppedByWeek.data"
          :options="patientStats.grouppedByWeek.options"
          hover-reveal
          type="Line"
        >
          <h4 class="card-title font-weight-light mt-2 ml-2">
            {{ patientStats.title }}
          </h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            {{ patientStats.grouppedByWeek.subTitle }}
          </p>
          <template v-slot:actions>
            <v-icon
              class="mr-1"
            >
              mdi-clock-outline
            </v-icon>
            <span class="h5 mb-0 caption black--text font-weight-dark">Patient Registeration last weeks</span>
          </template>
        </base-material-chart-card>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        lg="6"
      >
        <base-material-chart-card
          :data="patientStats.grouppedByMonth.data"
          :options="patientStats.grouppedByMonth.options"
          hover-reveal
          type="Bar"
        >
          <h4 class="card-title font-weight-light mt-2 ml-2">
            {{ patientStats.title }}
          </h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            {{ patientStats.grouppedByMonth.subTitle }}
          </p>
          <template v-slot:actions>
            <v-icon
              class="mr-1"
            >
              mdi-clock-outline
            </v-icon>
            <span class="h5 mb-0 caption black--text font-weight-dark">Patient Registeration last 12 Months</span>
          </template>
        </base-material-chart-card>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        lg="6"
      >
        <base-material-chart-card
          :data="callDurationStats.grouppedByDay.data"
          :options="callDurationStats.grouppedByDay.options"
          hover-reveal
          type="Line"
        >
          <h4 class="card-title font-weight-light mt-2 ml-2">
            {{ callDurationStats.title }}
          </h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            {{ callDurationStats.grouppedByDay.subTitle }}
          </p>
          <template v-slot:actions>
            <v-icon
              class="mr-1"
            >
              mdi-clock-outline
            </v-icon>
            <span class="h5 mb-0 caption black--text font-weight-dark">Call Duration last 7 days</span>
          </template>
        </base-material-chart-card>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        lg="6"
      >
        <base-material-chart-card
          :data="callDurationStats.grouppedByMonth.data"
          :options="callDurationStats.grouppedByMonth.options"
          hover-reveal
          type="Bar"
        >
          <h4 class="card-title font-weight-light mt-2 ml-2">
            {{ callDurationStats.title }}
          </h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            {{ callDurationStats.grouppedByMonth.subTitle }}
          </p>
          <template v-slot:actions>
            <v-icon
              class="mr-1"
            >
              mdi-clock-outline
            </v-icon>
            <span class="h5 mb-0 caption black--text font-weight-dark">Call Duration last 12 Months</span>
          </template>
        </base-material-chart-card>
      </v-col>
    </v-row>
    <v-divider />
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
  </section>
</template>

<script>
  import format from 'date-fns/format'
  // https://www.npmjs.com/package/chartist-plugin-tooltips-updated
  import ChartistTooltip from 'chartist-plugin-tooltips-updated'

  export default {
    name: 'AdminStats',
    components: {
      FilterListDialog: () => import('@/components/FilterListDialog'),
      StatsCard: () => import('@/components/StatsCard'),
    },
    data () {
      return {
        merchantFilterTitle: 'Merchants',
        merchantFilterValue: 0,
        specialityFilterTitle: 'Specialities',
        specialityFilterValue: 0,
        statesFilterTitle: 'States',
        statesFilterValue: 0,
        districtsFilterTitle: 'Districts',
        districtsFilterValue: 0,
        merchantFilterSubText: 'All Merchants',
        specialityFilterSubText: 'All Specialities',
        stateFilterSubText: 'All States',
        districtFilterSubText: 'All Districts',
        cscMerchants: [],
        specialities: [],
        cscStates: [],
        cscDistricts: [],
        merchantListDialog: false,
        specialitiesListDialog: false,
        stateListDialog: false,
        districtListDialog: false,
        selectedMerchants: [],
        selectedSpecialities: [],
        selectedStates: [],
        selectedDistricts: [],
        consultationStats: {
          title: 'Consultations title',
          stats: {},
          grouppedByDay: {
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
            subTitle: 'Consultations daily subTitle',
          },
          grouppedByMonth: {
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
            subTitle: 'Consultations monthly subTitle',
          },
        },
        patientStats: {
          count: 0,
          title: 'patient title',
          grouppedByWeek: {
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
            subTitle: 'patient weekly subTitle',
          },
          grouppedByMonth: {
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
            subTitle: 'patient monthly subTitle',
          },
        },
        datePicker: {
          dateFormat: 'D MMM YYYY',
          dateOne: '',
          dateTwo: '',
          endDate: '',
          subText: 'Selected Dates',
        },
        doctorStats: {
          approvedCount: 0,
          totalCount: 0,
          title: 'doctor title',
          grouppedByWeek: {
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
            subTitle: 'doctor weekly subTitle',
          },
          grouppedByMonth: {
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
              plugins: [ChartistTooltip()],
            },
            subTitle: 'doctor monthly subTitle',
          },
        },
        callDurationStats: {
          minCallDuration: 0,
          avgCallDuration: 0,
          maxCallDuration: 0,
          totalCallDuration: 0,
          totalVideoConsultations: 0,
          title: 'call title',
          grouppedByDay: {
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
            subTitle: 'call daily subTitle',
          },
          grouppedByMonth: {
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
            subTitle: 'call monthly subTitle',
          },
        },
        paymentStats: {
          totalAmount: 0,
        },
      }
    },
    watch: {
      selectedMerchants (newSelectedMerchants) {
        var response = this.updateFilterSubText(newSelectedMerchants, this.cscMerchants)
        this.merchantFilterSubText = this.getUpdatedFilterSubText(response[0])
      },
      selectedSpecialities (newselectedSpecialities) {
        var response = this.updateFilterSubText(newselectedSpecialities, this.specialities)
        this.specialityFilterSubText = this.getUpdatedFilterSubText(response[0])
      },
    },
    created () {
      // TODO: single request API to fetch required data on page load.
      this.getConsultationStats()
      this.getCscMerchants()
      this.getSpecialities()
      this.updateDatePickerFields()
      this.getDoctorAvailableStats()
      this.getPatientStats()
      this.getPaymentStats()
    },
    methods: {
      getConsultationStats: function () {
        this.$http.post('/dashboard_consultations/stats', {
          consultation_filters: {
            merchant_ids: this.selectedMerchants,
            mapped_speciality_ids: this.selectedSpecialities,
            date_from: this.datePicker.dateOne,
            date_to: this.datePicker.dateTwo,
          },
        }).then((response) => {
          const consultationStats = response
          const callDurationStats = consultationStats.call_duration_stats
          this.consultationStats.stats = consultationStats.consultation_stats ? consultationStats.consultation_stats : {}
          // handling consultation stats chart
          if (consultationStats.groupped_by_day) {
            this.handleChartData('consultationStats', 'daily', consultationStats.groupped_by_day)
          }
          if (consultationStats.groupped_by_month) {
            this.handleChartData('consultationStats', 'monthly', consultationStats.groupped_by_month)
          }
          // handling call duration stats
          this.callDurationStats.minCallDuration = callDurationStats.min_call_duration
          this.callDurationStats.avgCallDuration = callDurationStats.avg_call_duration
          this.callDurationStats.maxCallDuration = callDurationStats.max_call_duration
          this.callDurationStats.totalCallDuration = callDurationStats.total_call_duration
          this.callDurationStats.totalVideoConsultations = callDurationStats.total_video_consultations
          if (callDurationStats.groupped_by_day) {
            this.handleChartData('callDurationStats', 'daily', callDurationStats.groupped_by_day)
          }
          if (callDurationStats.groupped_by_month) {
            this.handleChartData('callDurationStats', 'monthly', callDurationStats.groupped_by_month)
          }
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },
      getCscMerchants: function () {
        this.$http.get('/dashboard_csc_merchants/index').then((response) => {
          this.cscMerchants = response
          this.merchantFilterValue = this.cscMerchants.length
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },
      getSpecialities: function () {
        this.$http.get('/mapped_specialities/index').then((response) => {
          this.specialities = response
          this.specialityFilterValue = this.specialities.length
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },
      getCscStates: function () {
        this.$http.get('/csc_states/index').then((response) => {
          this.cscStates = response
          this.statesFilterValue = this.cscStates.length
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },
      getCscDistricts: function () {
        this.$http.get('/csc_districts/index').then((response) => {
          this.cscDistricts = response
          this.districtsFilterValue = this.cscDistricts.length
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
          this.getDoctorAvailableStats()
        } else if (filterName === this.specialityFilterTitle) {
          this.specialitiesListDialog = false
          this.getDoctorAvailableStats()
        } else if (filterName === this.statesFilterTitle) {
          this.stateListDialog = false
        } else if (filterName === this.districtsFilterTitle) {
          this.districtListDialog = false
        }
        this.getConsultationStats()
      },
      formatDates (datePicker) {
        // on change of dates, required data is also filtered.
        let formattedDates = ''
        this.datePicker = datePicker
        if (datePicker.dateOne) {
          formattedDates = format(datePicker.dateOne, this.datePicker.dateFormat)
        }
        if (datePicker.dateTwo) {
          formattedDates += ' - ' + format(datePicker.dateTwo, this.datePicker.dateFormat)
        }
        // this.datePicker.subText += '(' + formattedDates + ')'
        this.datePicker.subText = formattedDates
        this.getConsultationStats()
      },
      resetDates () {
        this.datePicker.dateOne = ''
        this.datePicker.dateTwo = ''
        this.datePicker.subText = ''
        this.getConsultationStats()
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
      getDoctorAvailableStats: function () {
        this.$http.post('/doctor_profiles/stats', {
          doctor_profile_filters: {
            merchant_ids: this.selectedMerchants,
            mapped_speciality_ids: this.selectedSpecialities,
          },
        }).then((response) => {
          this.handleDoctorAvailableStatsResponse(response)
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },
      handleDoctorAvailableStatsResponse: function (response) {
        if (response.approved_doctor_profiles) {
          this.doctorStats.approvedCount = response.approved_doctor_profiles.count
        }
        if (response.groupped_by_week) {
          this.handleChartData('doctorStats', 'weekly', response.groupped_by_week)
        }
        if (response.groupped_by_month) {
          this.handleChartData('doctorStats', 'monthly', response.groupped_by_month)
        }
      },
      getPatientStats: function () {
        this.$http.get('/users/patients_stats').then((response) => {
          if (response.count) {
            this.patientStats.count = response.count
          }
          if (response.groupped_by_week) {
            this.handleChartData('patientStats', 'weekly', response.groupped_by_week)
          }
          if (response.groupped_by_month) {
            this.handleChartData('patientStats', 'monthly', response.groupped_by_month)
          }
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },
      getPaymentStats: function () {
        this.$http.get('/payment_notifications/payments').then((response) => {
          this.paymentStats.totalAmount = response.payment_amount
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },
      fetchChartData: function (chartData) {
        const chartDataLabels = Object.keys(chartData)
        const chartDataSeries = [Object.values(chartData)]
        let chartDataOptionHigh = 0
        chartDataOptionHigh = (Math.max(...chartDataSeries[0]) + Math.max(...chartDataSeries[0]) / 4)
        if (chartDataOptionHigh === 0) {
          chartDataOptionHigh = 100
        }
        return [chartDataLabels, chartDataSeries, chartDataOptionHigh]
      },
      handleChartData: function (whoseStats, grouppingInterval, grouppedData) {
        const specifiedIntervalData = this.fetchChartData(grouppedData)
        if (whoseStats === 'doctorStats') {
          if (grouppingInterval === 'weekly') {
            this.doctorStats.grouppedByWeek.data.labels = specifiedIntervalData[0]
            this.doctorStats.grouppedByWeek.data.series = specifiedIntervalData[1]
            this.doctorStats.grouppedByWeek.options.high = specifiedIntervalData[2]
          } else if (grouppingInterval === 'monthly') {
            this.doctorStats.grouppedByMonth.data.labels = specifiedIntervalData[0]
            this.doctorStats.grouppedByMonth.data.series = specifiedIntervalData[1]
            this.doctorStats.grouppedByMonth.options.high = specifiedIntervalData[2]
          }
        } else if (whoseStats === 'consultationStats') {
          if (grouppingInterval === 'daily') {
            this.consultationStats.grouppedByDay.data.labels = specifiedIntervalData[0]
            this.consultationStats.grouppedByDay.data.series = specifiedIntervalData[1]
            this.consultationStats.grouppedByDay.options.high = specifiedIntervalData[2]
          } else if (grouppingInterval === 'monthly') {
            this.consultationStats.grouppedByMonth.data.labels = specifiedIntervalData[0]
            this.consultationStats.grouppedByMonth.data.series = specifiedIntervalData[1]
            this.consultationStats.grouppedByMonth.options.high = specifiedIntervalData[2]
          }
        } else if (whoseStats === 'patientStats') {
          if (grouppingInterval === 'weekly') {
            this.patientStats.grouppedByWeek.data.labels = specifiedIntervalData[0]
            this.patientStats.grouppedByWeek.data.series = specifiedIntervalData[1]
            this.patientStats.grouppedByWeek.options.high = specifiedIntervalData[2]
          } else if (grouppingInterval === 'monthly') {
            this.patientStats.grouppedByMonth.data.labels = specifiedIntervalData[0]
            this.patientStats.grouppedByMonth.data.series = specifiedIntervalData[1]
            this.patientStats.grouppedByMonth.options.high = specifiedIntervalData[2]
          }
        } else if (whoseStats === 'callDurationStats') {
          if (grouppingInterval === 'daily') {
            this.callDurationStats.grouppedByDay.data.labels = specifiedIntervalData[0]
            this.callDurationStats.grouppedByDay.data.series = specifiedIntervalData[1]
            this.callDurationStats.grouppedByDay.options.high = specifiedIntervalData[2]
          } else if (grouppingInterval === 'monthly') {
            this.callDurationStats.grouppedByMonth.data.labels = specifiedIntervalData[0]
            this.callDurationStats.grouppedByMonth.data.series = specifiedIntervalData[1]
            this.callDurationStats.grouppedByMonth.options.high = specifiedIntervalData[2]
          }
        }
      },
      getSubStats: function (whoseStats) {
        let subStats = {}
        if (whoseStats === 'consultation') {
          if (this.consultationStats.stats) {
            subStats = [
              {
                title: 'success',
                count: this.consultationStats.stats.successful_count,
                color: '#28a745',
                icon: ['fas', 'arrow-up'],
              },
              {
                title: 'failed',
                count: this.consultationStats.stats.unsuccessful_count,
                color: '#dc3545',
                icon: ['fas', 'arrow-down'],
              },
            ]
          }
        } else if (whoseStats === 'call_duration') {
          if (this.callDurationStats) {
            subStats = [
              {
                title: 'average',
                count: this.callDurationStats.avgCallDuration,
                color: '#17a2b8',
              },
              {
                title: 'count',
                count: this.callDurationStats.totalVideoConsultations,
                color: '#17a2b8',
              },
            ]
          }
        }
        return subStats
      },
      getStatsCardIconBgColor: function (section) {
        let color
        switch (section) {
          case 'filter':
            color = '#004a91'
            break
          case 'stats':
            color = '#368f8b'
            break
          case 'graph':
            color = 'lightOrange'
            break
        }
        return color
      },
      getUpdatedFilterSubText: function (selectedFilters) {
        const chosenFilters = selectedFilters.split(',')
        let filterSubtext
        if (chosenFilters.length >= 3) {
          filterSubtext = chosenFilters[0] + ', ' + chosenFilters[1] + ' + ' + `${chosenFilters.length - 2}` + 'more'
        } else {
          filterSubtext = selectedFilters
        }
        return filterSubtext
      },
    },
  }
</script>
<style lang='scss' unscoped>
  .dashboard-consultation {
    width: 95%;
    .datepicker-filter {
      margin-top: 30px;
      margin-bottom: 15px;
      background-color: white;
    }
    .dashboard-graph {
      .caption {
        font-size: 16px !important;
      }
    }
  }
</style>
