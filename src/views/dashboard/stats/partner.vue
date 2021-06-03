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
            <span class="h5 mb-0 text-caption black--text font-weight-dark">Consultations last 7 days</span>
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
            <span class="h5 mb-0 text-caption black--text font-weight-dark">Consultations last 12 Months</span>
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
            <span class="h5 mb-0 text-caption black--text font-weight-dark">Doctor Registeration last weeks</span>
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
            <span class="h5 mb-0 text-caption black--text font-weight-dark">Doctor Registeration last 12 Months</span>
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
            <span class="h5 mb-0 text-caption black--text font-weight-dark">Call Duration last 7 days</span>
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
            <span class="h5 mb-0 text-caption black--text font-weight-dark">Call Duration last 12 Months</span>
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
  // https://www.npmjs.com/package/chartist-plugin-tooltips-updated
  import ChartistTooltip from 'chartist-plugin-tooltips-updated'
  import CommonStats from '@/components/dashboard/CommonStats.js'

  export default {
    name: 'PartnerStats',
    components: {
      FilterListDialog: () => import('@/components/FilterListDialog'),
      StatsCard: () => import('@/components/StatsCard'),
    },
    mixins: [CommonStats],
    data () {
      return {
        cscMerchants: [],
        merchantFilterTitle: 'Merchants',
        merchantFilterValue: 0,
        merchantFilterSubText: 'All Merchants',
        selectedMerchants: [],
        merchantListDialog: false,
        specialities: [],
        specialityFilterTitle: 'Specialities',
        specialityFilterValue: 0,
        specialityFilterSubText: 'All Specialities',
        selectedSpecialities: [],
        specialitiesListDialog: false,
        cscStates: [],
        cscDistricts: [],
        stateListDialog: false,
        districtListDialog: false,
        stateFilterSubText: 'All States',
        districtFilterSubText: 'All Districts',
        selectedStates: [],
        selectedDistricts: [],
        statesFilterTitle: 'States',
        statesFilterValue: 0,
        districtsFilterTitle: 'Districts',
        districtsFilterValue: 0,
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
      }
    },
    watch: {
    },
    created () {
    },
    methods: {
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
      .text-caption {
        font-size: 16px !important;
      }
    }
  }
</style>
