<template>
  <div class="container">
    <b-table
      striped
      hover
      :items="downloadedReports.reports"
      :fields="downloadedReports.fields"
      small
      style="text-align: center"
    >
      <template #cell(index)="data">
        {{ data.index + 1 }}
      </template>
      <template #cell(download)="data">
        <font-awesome-icon
          :icon="['fa', 'download']"
          class="icons-size mr-2 text-success"
          size="1x"
          @click="downloadImage(data.item.file_url)"
        />
      </template>
    </b-table>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'ConsultationReports',
    data () {
      return {
        downloadedReports: {
          reports: [],
          fields: ['index', 'name', 'status', 'started_at', 'finished_at', 'download'],
        },
      }
    },
    created () {
      this.getDownloadedConsultationReports()
    },
    methods: {
      getDownloadedConsultationReports: function () {
        this.$http.get('/downloadable_consultation_report/index').then((response) => {
          this.downloadedReports.reports = response
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },
      downloadImage: function (reportUrl) {
        axios({
          url: reportUrl,
          method: 'GET',
          responseType: 'blob',
        }).then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]))
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', 'consultations_17_1626352429.xlsx')
          document.body.appendChild(link)
          link.click()
        })
      },
    },
  }
</script>

<style>
</style>
