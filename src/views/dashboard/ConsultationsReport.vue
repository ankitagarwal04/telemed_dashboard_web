<template>
  <!-- https://bootstrap-vue.org/docs/components/table -->
  <div class="container consultation_reports">
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
    <b-table
      striped
      hover
      :items="consultationsData.consultations"
      :fields="consultationsData.fields"
      small
    >
      <template #cell(index)="data">
        {{ (currentPage - 1)*perPage + data.index + 1 }}
      </template>
    </b-table>
    <hr>
    <div class="d-flex justify-content-between">
      <b-pagination
        v-model="currentPage"
        :total-rows="consultationsData.consultationsCount"
        :per-page="perPage"
      />
      <!-- <download-excel
        class="btn btn-info h-100"
        :data="consultationsData.downloadConsultations"
        type="csv"
        name="doctors_successful_consultations.xls"
      >
        Download CSV
      </download-excel> -->
      <b-button
        class="btn btn-info h-100"
        @click="startReportDownload()"
      >
        Start Download
      </b-button>
    </div>
    <!-- downloadble reports section-->
    <b-button
      class="btn btn-info h-100"
      @click="downloadImage()"
    >
      File Download
    </b-button>
    <hr>
    <b-table
      striped
      hover
      :items="downloadedReports.reports"
      :fields="downloadedReports.fields"
      small
    >
      <template #cell(index)="data">
        {{ (currentPage - 1)*perPage + data.index + 1 }}
      </template>
      <template #cell(download_report)="data">
        {{ (currentPage - 1)*perPage + data.index + 1 }}
      </template>
    </b-table>
  </div>
</template>

<script>
  import format from 'date-fns/format'
  import axios from 'axios'
  export default {
    name: 'ConsultationsReport',
    components: {
      // DownloadExcel: () => import('vue-json-excel'),
      StatsCard: () => import('@/components/StatsCard'),
    },
    data () {
      return {
        consultationsData: {
          consultations: [],
          consultationsCount: 0,
          fields: ['index', 'doctorFullName', 'doctorEmail', 'phoneNumber', 'speciality'],
        },
        downloadedReports: {
          reports: [],
          fields: ['index', 'name', 'status', 'started_at', 'finished_at'],
        },
        perPage: 10,
        currentPage: 1,
        datePicker: {
          dateFormat: 'D MMM YYYY',
          dateOne: '',
          dateTwo: '',
          endDate: '',
          subText: 'Selected Dates',
        },
      }
    },
    watch: {
      currentPage (newCurrentPage) {
        this.getConsultations('pagination')
      },
    },
    created () {
      this.getConsultations('')
      this.getDownloadedConsultationReports()
    },
    methods: {
      // sample method to download image, retrived from the api server.
      // this method can be used as a reference (for generating a url) to download a file.
      downloadImage: function () {
        axios({
          url: 'https://source.unsplash.com/random/500*500',
          method: 'GET',
          responseType: 'blob',
        }).then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]))
          const link = document.createElement('a')
          link.href = url
          // link.setAttribute('download', 'file.pdf')
          link.setAttribute('download', 'image.jpg')
          document.body.appendChild(link)
          link.click()
        })
      },
      resetConsultations: function () {
        this.consultationsData.consultations = []
        this.consultationsData.consultationsCount = 0
      },
      startReportDownload: function () {
        this.$http.post('/dashboard_consultations/download_report', {
          consultation_filters: {
            date_from: this.datePicker.dateOne,
            date_to: this.datePicker.dateTwo,
          },
        }).then((response) => {
          this.$alertify.success('Report Downloading is in process.')
          this.getDownloadedConsultationReports()
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },
      getConsultations: function (instruction) {
        let consultationUrl = '/dashboard_consultations/index'
        let addedString = ''
        if (instruction === 'pagination') {
          addedString = `?page_num=${this.currentPage}&per_page=${this.perPage}`
        } else {
          addedString = `?page_num=${this.currentPage}&per_page=${this.perPage}&only_count=true`
        }
        consultationUrl += addedString
        this.$http.post(consultationUrl, {
          consultation_filters: {
            date_from: this.datePicker.dateOne,
            date_to: this.datePicker.dateTwo,
          },
        }).then((response) => {
          if (response.all_consultations) {
            this.consultationsData.downloadConsultations = []
            response.all_consultations.forEach((consultation) => {
              this.consultationsData.downloadConsultations.push({
                doctorFullName: consultation.doctor_full_name,
                doctorEmail: consultation.doctor_email,
                phoneNumber: consultation.phone_number,
                speciality: consultation.speciality,
              })
            })
          }
          if (response.consultations) {
            this.consultationsData.consultations = []
            response.consultations.forEach((consultation) => {
              this.consultationsData.consultations.push({
                doctorFullName: consultation.doctor_full_name,
                doctorEmail: consultation.doctor_email,
                phoneNumber: consultation.phone_number,
                speciality: consultation.speciality,
              })
            })
          }
          if (response.total_count >= 0) {
            this.consultationsData.consultationsCount = response.total_count
          }
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },
      getDownloadedConsultationReports: function () {
        this.$http.get('/downloadable_consultation_report/index').then((response) => {
          this.downloadedReports.reports = response
        }).catch((error) => {
          // handle error
          console.log(error)
        })
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
        this.datePicker.subText = formattedDates
        this.getConsultations()
      },
      resetDates () {
        new Promise((resolve, reject) => {
          this.datePicker.dateOne = ''
          this.datePicker.dateTwo = ''
          this.datePicker.subText = ''
          resolve('')
        }).then(response => {
          this.getConsultations()
        })
      },
    },
  }
</script>
<style unscoped>
.consultation_reports
  .asd__wrapper--datepicker-open {
    left: 0 !important;
  }
</style>
