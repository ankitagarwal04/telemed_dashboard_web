<template>
  <!-- https://bootstrap-vue.org/docs/components/table -->
  <div class="container">
    <b-table
     striped
     hover
     :items="consultations"
     :fields="fields"
    />
  </div>
</template>

<script>
  export default {
    name: 'ConsultationsReport',
    data () {
      return {
        fields: ['id', 'doctorProfileId'],
        consultations: [],
        consultationsCount: null,
        pageNum: 1,
      }
    },
    created () {
      this.getConsultations()
    },
    methods: {
      getConsultations: function () {
        this.$http.get('/dashboard_consultations/index', {
          params: { page_num: this.pageNum },
        }).then((response) => {
          const responseConsultations = response.consultations
          if (responseConsultations && responseConsultations.length > 0) {
            this.consultationsCount = response.total_count
            responseConsultations.forEach((consultation) => {
              console.log(consultation)
              this.consultations.push({
                id: consultation.id,
                doctorProfileId: consultation.doctor_profile_id,
              })
            })
          }
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },
    },
  }
</script>
<style></style>
