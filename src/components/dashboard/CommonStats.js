// PURPOSE FOR THIS FILE:
// this file contain common js code between different user types.
import format from 'date-fns/format'
// https://www.npmjs.com/package/chartist-plugin-tooltips-updated
export default {
  watch: {
    selectedMerchants (newSelectedMerchants) {
      this.merchantFilterSubText = this.updateFilterSubText('Merchant', newSelectedMerchants, this.cscMerchants)
      const selectedMerchantsData = []
      this.cscMerchants.forEach((merchant) => {
        if (newSelectedMerchants.includes(merchant.id)) {
          selectedMerchantsData.push(merchant)
        }
      })
      // when none merchant is selected, fetch all merchant specialities
      // else fetch only selected merchant sepcialities.
      if (selectedMerchantsData.length === 0) {
        // on no merchant select, mapped speciality filter are reset (to avoid confusion).
        // keep this in promise.
        new Promise((resolve, reject) => {
          this.resetSpecialities()
          resolve('')
        }).then(response => {
          this.getMappedSpecialitiesFromMerchants(this.cscMerchants)
        })
      } else {
        this.getMappedSpecialitiesFromMerchants(selectedMerchantsData)
      }
    },
    selectedSpecialities (newselectedSpecialities) {
      this.specialityFilterSubText = this.updateFilterSubText('Speciality', newselectedSpecialities, this.specialities)
    },
  },
  created () {
    // TODO: single request API to fetch required data on page load.
    this.getConsultationStats()
    this.getCscMerchants()
    this.updateDatePickerFields()
    this.getDoctorAvailableStats()
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
    resetSpecialities: function () {
      this.specialities = []
      this.specialityFilterValue = 0
      this.selectedSpecialities = []
      this.specialityFilterSubText = 'All Specialities'
    },
    getMappedSpecialitiesFromMerchants: function (merchantResponse) {
      if (merchantResponse.length > 0) {
        const allMappedSpecialities = []
        const allMappedSpecialitiesIds = []
        merchantResponse.forEach((merchant) => {
          const mappedSpecialities = merchant.mapped_specialities
          if (mappedSpecialities.length > 0) {
            mappedSpecialities.forEach((mappedSpeciality) => {
              const mappedSpecialityId = mappedSpeciality.id
              if (!allMappedSpecialitiesIds.includes(mappedSpecialityId)) {
                allMappedSpecialitiesIds.push(mappedSpecialityId)
                allMappedSpecialities.push({ id: mappedSpecialityId, name: mappedSpeciality.name })
              }
            })
          }
        })
        if (allMappedSpecialitiesIds.length === 0) {
          this.resetSpecialities()
        } else {
          this.setSpecialities(allMappedSpecialities, allMappedSpecialitiesIds)
        }
      } else {
        this.resetSpecialities()
      }
    },
    setSpecialities: function (mappedSpecialities, mappedSpecialitiesIds) {
      const newselectedSpecialities = []
      this.specialities = mappedSpecialities
      this.specialityFilterValue = this.specialities.length
      this.selectedSpecialities.forEach((selectedSpecialityId) => {
        if (mappedSpecialitiesIds.includes(selectedSpecialityId)) {
          newselectedSpecialities.push(selectedSpecialityId)
        }
      })
      this.selectedSpecialities = newselectedSpecialities
      this.specialityFilterSubText = this.updateFilterSubText('Speciality', this.selectedSpecialities, this.specialities)
    },
    getCscMerchants: function () {
      this.$http.get('/dashboard_csc_merchants/index').then((response) => {
        this.cscMerchants = response
        this.merchantFilterValue = this.cscMerchants.length
        this.getMappedSpecialitiesFromMerchants(response)
      }).catch((error) => {
        // handle error
        console.log(error)
      })
    },
    updateFilterSubText: function (operationOn, newSelectedFilters, filterDataItems) {
      let filterSubtext = ''
      if (newSelectedFilters.length > 0) {
        const selectedFilterNames = []
        newSelectedFilters.forEach((selectedFilterId, index) => {
          filterDataItems.forEach((item, index) => {
            if (item.id === selectedFilterId) {
              selectedFilterNames.push(item.name)
            }
          })
        })
        filterSubtext = selectedFilterNames.join(', ')
      } else {
        switch (operationOn) {
          case 'Merchant':
            filterSubtext = 'All Merchants'
            break
          case 'Speciality':
            filterSubtext = 'All Specialities'
            break
          default:
            filterSubtext = 'All'
            break
        }
      }
      filterSubtext = this.getUpdatedFilterSubText(filterSubtext)
      return filterSubtext
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
