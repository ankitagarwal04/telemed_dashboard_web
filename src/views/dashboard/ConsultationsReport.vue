<template>
  <!-- https://bootstrap-vue.org/docs/components/table -->
  <div class="container">
    <div class="d-flex justify-content-between">
      <b-pagination
        v-model="currentPage"
        :total-rows="consultationsCount"
        :per-page="perPage"
      ></b-pagination>
      <download-excel
        class="btn btn-info h-100"
        :data="downloadConsultations"
        type="csv"
        name="doctors_successful_consultations.xls"
      >
        Download CSV
      </download-excel>
    </div>
    <b-table
     striped
     hover
     :items="consultations"
     :fields="fields"
     small
    >
      <template #cell(index)="data">
        {{ (currentPage - 1)*perPage + data.index + 1 }}
      </template>
    </b-table>
  </div>
</template>

<script>
  // TODO: download report needs to be implemented through background job.
  export default {
    name: 'ConsultationsReport',
    components: {
      DownloadExcel: () => import('vue-json-excel'),
    },
    data () {
      return {
        fields: ['index', 'doctorFullName', 'doctorEmail', 'phoneNumber', 'speciality'],
        consultations: [],
        downloadConsultations: [],
        consultationsCount: null,
        perPage: 10,
        currentPage: 1,
      }
    },
    watch: {
      currentPage (newCurrentPage) {
        this.getConsultations('pagination')
      },
    },
    created () {
      this.getConsultations('pagination')
      this.getConsultations('only_count')
      this.getConsultations('download')
    },
    methods: {
      getConsultations: function (instruction) {
        let params = {}
        if (instruction === 'pagination') {
          params = {
            page_num: this.currentPage,
            per_page: this.perPage,
          }
        } else if (instruction === 'only_count') {
          params = {
            only_count: true,
          }
        } else {
          params = {}
        }
        this.$http.get('/dashboard_consultations/index', {
          params: params,
        }).then((response) => {
          const responseConsultations = response.consultations
          if (response.total_count) {
            this.consultationsCount = response.total_count
          }
          if (responseConsultations && responseConsultations.length > 0) {
            if (instruction === 'download') {
              responseConsultations.forEach((consultation) => {
                this.downloadConsultations.push({
                  doctorFullName: consultation.doctor_full_name,
                  doctorEmail: consultation.doctor_email,
                  phoneNumber: consultation.phone_number,
                  speciality: consultation.speciality,
                })
              })
            } else {
              this.consultations = []
              responseConsultations.forEach((consultation) => {
                this.consultations.push({
                  doctorFullName: consultation.doctor_full_name,
                  doctorEmail: consultation.doctor_email,
                  phoneNumber: consultation.phone_number,
                  speciality: consultation.speciality,
                })
              })
            }
          }
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },
    },
  }
</script>
