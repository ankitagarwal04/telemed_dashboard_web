<template>
  <v-container
    id="consultation"
    fluid
    tag="section"
  >
    <!-- filters -->
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
            id="datepicker-trigger"
            type="text"
            placeholder="Select dates"
            :value="formatDates(datePicker.dateOne, datePicker.dateTwo)"
          >

          <AirbnbStyleDatepicker
            :trigger-element-id="'datepicker-trigger'"
            :mode="'range'"
            :fullscreen-mobile="true"
            :date-one="datePicker.dateOne"
            :date-two="datePicker.dateTwo"
            :end-date="datePicker.endDate"
            @date-one-selected="val => { datePicker.dateOne = val }"
            @date-two-selected="val => { datePicker.dateTwo = val }"
            @apply="getConsultationStats ()"
          />
        </div>
      </v-col>
    </v-row>
    <v-divider />
    <!-- consultation stats -->
    <v-row>
      <v-col
        cols="12"
        sm="12"
        lg="12"
      >
        <stats-card
          color="success"
          icon="mdi-store"
          title="Consultations"
          :value="consultationStats.stats.successful_count"
          :sub-stats="getSubStats('consultation')"
          sub-icon="mdi-calendar"
          sub-text="Updated Last 24 Hours"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        lg="6"
      >
        <base-material-chart-card
          :data="consultationStats.grouppedByDay.data"
          :options="consultationStats.grouppedByDay.options"
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
          :data="consultationStats.grouppedByMonth.data"
          :options="consultationStats.grouppedByMonth.options"
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
    <v-divider />
    <!-- doctor stats -->
    <v-row>
      <v-col
        cols="12"
        sm="12"
        lg="12"
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
        sm="6"
        lg="6"
      >
        <base-material-chart-card
          :data="doctorStats.grouppedByWeek.data"
          :options="doctorStats.grouppedByWeek.options"
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
          :data="doctorStats.grouppedByMonth.data"
          :options="doctorStats.grouppedByMonth.options"
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
    <v-divider />
    <!-- patient stats -->
    <v-row>
      <v-col
        cols="12"
        sm="12"
        lg="!2"
      >
        <base-material-stats-card
          color="success"
          icon="mdi-store"
          title="Patients Registered"
          :value="patientStats.count"
          sub-icon="mdi-calendar"
          sub-text="Updated Last 24 Hours"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        lg="6"
      >
        <base-material-chart-card
          :data="patientStats.grouppedByWeek.data"
          :options="patientStats.grouppedByWeek.options"
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
          :data="patientStats.grouppedByMonth.data"
          :options="patientStats.grouppedByMonth.options"
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
    <v-divider />
    <!-- call duration stats -->
    <v-row>
      <v-col
        cols="12"
        sm="12"
        lg="12"
      >
        <base-material-stats-card
          color="success"
          icon="mdi-store"
          title="Call Durations"
          :value="callDurationStats.totalCallDuration"
          sub-icon="mdi-calendar"
          sub-text="Updated Last 24 Hours"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        lg="6"
      >
        <base-material-chart-card
          :data="callDurationStats.grouppedByDay.data"
          :options="callDurationStats.grouppedByDay.options"
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
          :data="callDurationStats.grouppedByMonth.data"
          :options="callDurationStats.grouppedByMonth.options"
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
    <v-divider />
    <!-- payment stats -->
    <v-row>
      <v-col
        cols="12"
        sm="12"
        lg="12"
      >
        <base-material-stats-card
          color="success"
          icon="mdi-store"
          title="Payment"
          :value="paymentStats.totalAmount"
          sub-icon="mdi-calendar"
          sub-text="Updated Last 24 Hours"
        />
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
      StatsCard: () => import('@/components/StatsCard'),
    },
    data () {
      return {
        merchantFilterTitle: 'Merchants',
        specialityFilterTitle: 'Specialities',
        merchantFilterSubText: 'All Merchants',
        specialityFilterSubText: 'All Specialities',
        merchantModalButtonText: 'SELECT',
        specialityModalButtonText: 'SELECT',
        cscMerchants: [],
        specialities: [],
        merchantListDialog: false,
        specialitiesListDialog: false,
        selectedMerchants: [],
        selectedSpecialities: [],
        consultationStats: {
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
          },
        },
        patientStats: {
          count: 0,
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
          },
        },
        datePicker: {
          dateFormat: 'D MMM YYYY',
          dateOne: '',
          dateTwo: '',
          endDate: '',
        },
        doctorStats: {
          approvedCount: 0,
          totalCount: 0,
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
          },
        },
        callDurationStats: {
          minCallDuration: 0,
          avgCallDuration: 0,
          maxCallDuration: 0,
          totalCallDuration: 0,
          totalVideoConsultations: 0,
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
      this.getConsultationStats()
      this.getCscMerchants()
      this.getSpecialities()
      this.updateDatePickerFields()
      this.getDoctorAvailableStats('on_page_load')
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
        this.getConsultationStats()
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
            if (response.groupped_by_week) {
              this.handleChartData('doctorStats', 'weekly', response.groupped_by_week)
            }
            if (response.groupped_by_month) {
              this.handleChartData('doctorStats', 'monthly', response.groupped_by_month)
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
              // filtering out the unselected specialities.
              if (this.selectedSpecialities.includes(speciality.id)) {
                const childSpecialities = speciality.child_specialities
                if (childSpecialities.doctor_stats) {
                  const doctorStats = childSpecialities.doctor_stats
                  if (doctorStats.groupped_by_week) {
                    this.handleChartData('doctorStats', 'weekly', doctorStats.groupped_by_week)
                  }
                  if (doctorStats.groupped_by_month) {
                    this.handleChartData('doctorStats', 'monthly', doctorStats.groupped_by_month)
                  }
                  updatedDoctorApprovedCount += doctorStats.total_approved_doctor_profiles_count
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
            subStats = {
              total: {
                count: this.consultationStats.stats.total,
                color: '#000',
                icon: 'mdi-tag',
              },
              failed: {
                count: this.consultationStats.stats.unsuccessful_count,
                color: '#000',
                icon: 'mdi-tag',
              },
            }
          }
        }
        return subStats
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
