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
          color="primary"
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
          this.consultationStats.count = consultationStats ? consultationStats.consultation_count : 0
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
