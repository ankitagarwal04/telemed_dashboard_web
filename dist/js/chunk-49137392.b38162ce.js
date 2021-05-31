(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49137392"],{"4afd":function(t,a,o){"use strict";o.r(a);var e=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("section",{staticClass:"container-fluid dashboard-consultation mt-8",attrs:{id:"consultation"}},[o("v-row",[o("v-col",{attrs:{cols:"12",md:"6",lg:"4",xl:"4"}},[o("stats-card",{attrs:{color:t.getStatsCardIconBgColor("filter"),icon:["fas","hospital"],"outer-icon-bg-color":"rgb(25,156,57, 0.7)","icon-bg-color":"rgb(25,156,57)","is-contain-modal":!0,"modal-button-text":t.merchantFilterTitle,"sub-icon":"mdi-tag","sub-text":t.merchantFilterSubText,value:t.merchantFilterValue},on:{"show-modal":function(a){t.merchantListDialog=!0}}})],1),o("v-col",{attrs:{cols:"12",md:"6",lg:"4",xl:"4"}},[o("stats-card",{attrs:{color:t.getStatsCardIconBgColor("filter"),icon:["fa","medkit"],"outer-icon-bg-color":"rgb(241, 154, 62, 0.7)","icon-bg-color":"rgb(241, 154, 62)","is-contain-modal":!0,"modal-button-text":t.specialityFilterTitle,"sub-icon":"mdi-tag","sub-text":t.specialityFilterSubText,value:t.specialityFilterValue},on:{"show-modal":function(a){t.specialitiesListDialog=!0}}})],1),o("v-col",{attrs:{cols:"12",md:"6",lg:"4",xl:"4"}},[o("stats-card",{attrs:{color:t.getStatsCardIconBgColor("filter"),icon:["fas","calendar"],"outer-icon-bg-color":"rgb(238, 180, 179, 0.7)","icon-bg-color":"rgb(238, 180, 179)",title:"Date Picker","sub-icon":"mdi-tag","is-date-picker":!0,"sub-text":t.datePicker.subText,"date-picker":t.datePicker},on:{"format-dates":function(a){return t.formatDates(a)},"reset-dates":function(a){return t.resetDates()}}})],1)],1),o("hr"),o("v-row",[o("v-col",{attrs:{cols:"12",sm:"6",lg:"4"}},[o("stats-card",{attrs:{color:t.getStatsCardIconBgColor("stats"),icon:["fa","rupee-sign"],"outer-icon-bg-color":"rgb(93, 162, 113, 0.7)","icon-bg-color":"rgb(93, 162, 113)",title:"Payment",value:t.paymentStats.totalAmount,"sub-icon":"mdi-calendar","sub-text":"Updated Last 24 Hours"}})],1),o("v-col",{attrs:{cols:"12",sm:"6",lg:"4"}},[o("stats-card",{attrs:{color:t.getStatsCardIconBgColor("stats"),icon:["fa","user-md"],"outer-icon-bg-color":"rgb(137, 6, 32, 0.7)","icon-bg-color":"rgb(137, 6, 32)",title:"Doctors Available",value:t.doctorStats.approvedCount,"sub-icon":"mdi-calendar","sub-text":"Updated Last 24 Hours"}})],1),o("v-col",{attrs:{cols:"12",sm:"6",lg:"4"}},[o("stats-card",{attrs:{color:t.getStatsCardIconBgColor("stats"),icon:["fa","hospital-user"],"outer-icon-bg-color":"rgb(32, 129, 195, 0.7)","icon-bg-color":"rgb(32, 129, 195)",title:"Patients Registered",value:t.patientStats.count,"sub-icon":"mdi-calendar","sub-text":"Updated Last 24 Hours"}})],1),o("v-col",{attrs:{cols:"12",sm:"6",lg:"4"}},[o("stats-card",{attrs:{color:t.getStatsCardIconBgColor("stats"),icon:["fa","video"],"outer-icon-bg-color":"rgb(64, 112, 118, 0.7)","icon-bg-color":"rgb(64, 112, 118)",title:"Call Durations",value:t.callDurationStats.totalCallDuration,"sub-stats":t.getSubStats("call_duration"),"sub-icon":"mdi-calendar","sub-text":"Updated Last 24 Hours"}})],1),o("v-col",{attrs:{cols:"12",sm:"6",lg:"4"}},[o("stats-card",{attrs:{color:t.getStatsCardIconBgColor("stats"),icon:["fas","laptop-medical"],"outer-icon-bg-color":"rgb(160, 70, 104, 0.7)","icon-bg-color":"rgb(160, 70, 104)",title:"Consultations",value:t.consultationStats.stats.total,"sub-stats":t.getSubStats("consultation"),"sub-icon":"mdi-calendar","sub-text":"Updated Last 24 Hours"}})],1)],1),o("v-row",{staticClass:"dashboard-graph"},[o("v-col",{attrs:{cols:"12",sm:"12",lg:"6"}},[o("base-material-chart-card",{attrs:{data:t.consultationStats.grouppedByDay.data,options:t.consultationStats.grouppedByDay.options,"hover-reveal":"",type:"Line"},scopedSlots:t._u([{key:"actions",fn:function(){return[o("v-icon",{staticClass:"mr-1"},[t._v(" mdi-clock-outline ")]),o("span",{staticClass:"h5 mb-0 caption black--text font-weight-dark"},[t._v("Consultations last 7 days")])]},proxy:!0}])},[o("h4",{staticClass:"card-title font-weight-light mt-2 ml-2"},[t._v(" "+t._s(t.consultationStats.title)+" ")]),o("p",{staticClass:"d-inline-flex font-weight-light ml-2 mt-1"},[t._v(" "+t._s(t.consultationStats.grouppedByDay.subTitle)+" ")])])],1),o("v-col",{attrs:{cols:"12",sm:"12",lg:"6"}},[o("base-material-chart-card",{attrs:{data:t.consultationStats.grouppedByMonth.data,options:t.consultationStats.grouppedByMonth.options,"hover-reveal":"",type:"Bar"},scopedSlots:t._u([{key:"actions",fn:function(){return[o("v-icon",{staticClass:"mr-1"},[t._v(" mdi-clock-outline ")]),o("span",{staticClass:"h5 mb-0 caption black--text font-weight-dark"},[t._v("Consultations last 12 Months")])]},proxy:!0}])},[o("h4",{staticClass:"card-title font-weight-light mt-2 ml-2"},[t._v(" "+t._s(t.consultationStats.title)+" ")]),o("p",{staticClass:"d-inline-flex font-weight-light ml-2 mt-1"},[t._v(" "+t._s(t.consultationStats.grouppedByMonth.subTitle)+" ")])])],1),o("v-col",{attrs:{cols:"12",sm:"12",lg:"6"}},[o("base-material-chart-card",{attrs:{data:t.doctorStats.grouppedByWeek.data,options:t.doctorStats.grouppedByWeek.options,"hover-reveal":"",type:"Line"},scopedSlots:t._u([{key:"actions",fn:function(){return[o("v-icon",{staticClass:"mr-1"},[t._v(" mdi-clock-outline ")]),o("span",{staticClass:"h5 mb-0 caption black--text font-weight-dark"},[t._v("Doctor Registeration last weeks")])]},proxy:!0}])},[o("h4",{staticClass:"card-title font-weight-light mt-2 ml-2"},[t._v(" "+t._s(t.doctorStats.title)+" ")]),o("p",{staticClass:"d-inline-flex font-weight-light ml-2 mt-1"},[t._v(" "+t._s(t.doctorStats.grouppedByWeek.subTitle)+" ")])])],1),o("v-col",{attrs:{cols:"12",sm:"12",lg:"6"}},[o("base-material-chart-card",{attrs:{data:t.doctorStats.grouppedByMonth.data,options:t.doctorStats.grouppedByMonth.options,"hover-reveal":"",type:"Bar"},scopedSlots:t._u([{key:"actions",fn:function(){return[o("v-icon",{staticClass:"mr-1"},[t._v(" mdi-clock-outline ")]),o("span",{staticClass:"h5 mb-0 caption black--text font-weight-dark"},[t._v("Doctor Registeration last 12 Months")])]},proxy:!0}])},[o("h4",{staticClass:"card-title font-weight-light mt-2 ml-2"},[t._v(" "+t._s(t.doctorStats.title)+" ")]),o("p",{staticClass:"d-inline-flex font-weight-light ml-2 mt-1"},[t._v(" "+t._s(t.doctorStats.grouppedByMonth.subTitle)+" ")])])],1),o("v-col",{attrs:{cols:"12",sm:"12",lg:"6"}},[o("base-material-chart-card",{attrs:{data:t.patientStats.grouppedByWeek.data,options:t.patientStats.grouppedByWeek.options,"hover-reveal":"",type:"Line"},scopedSlots:t._u([{key:"actions",fn:function(){return[o("v-icon",{staticClass:"mr-1"},[t._v(" mdi-clock-outline ")]),o("span",{staticClass:"h5 mb-0 caption black--text font-weight-dark"},[t._v("Patient Registeration last weeks")])]},proxy:!0}])},[o("h4",{staticClass:"card-title font-weight-light mt-2 ml-2"},[t._v(" "+t._s(t.patientStats.title)+" ")]),o("p",{staticClass:"d-inline-flex font-weight-light ml-2 mt-1"},[t._v(" "+t._s(t.patientStats.grouppedByWeek.subTitle)+" ")])])],1),o("v-col",{attrs:{cols:"12",sm:"12",lg:"6"}},[o("base-material-chart-card",{attrs:{data:t.patientStats.grouppedByMonth.data,options:t.patientStats.grouppedByMonth.options,"hover-reveal":"",type:"Bar"},scopedSlots:t._u([{key:"actions",fn:function(){return[o("v-icon",{staticClass:"mr-1"},[t._v(" mdi-clock-outline ")]),o("span",{staticClass:"h5 mb-0 caption black--text font-weight-dark"},[t._v("Patient Registeration last 12 Months")])]},proxy:!0}])},[o("h4",{staticClass:"card-title font-weight-light mt-2 ml-2"},[t._v(" "+t._s(t.patientStats.title)+" ")]),o("p",{staticClass:"d-inline-flex font-weight-light ml-2 mt-1"},[t._v(" "+t._s(t.patientStats.grouppedByMonth.subTitle)+" ")])])],1),o("v-col",{attrs:{cols:"12",sm:"12",lg:"6"}},[o("base-material-chart-card",{attrs:{data:t.callDurationStats.grouppedByDay.data,options:t.callDurationStats.grouppedByDay.options,"hover-reveal":"",type:"Line"},scopedSlots:t._u([{key:"actions",fn:function(){return[o("v-icon",{staticClass:"mr-1"},[t._v(" mdi-clock-outline ")]),o("span",{staticClass:"h5 mb-0 caption black--text font-weight-dark"},[t._v("Call Duration last 7 days")])]},proxy:!0}])},[o("h4",{staticClass:"card-title font-weight-light mt-2 ml-2"},[t._v(" "+t._s(t.callDurationStats.title)+" ")]),o("p",{staticClass:"d-inline-flex font-weight-light ml-2 mt-1"},[t._v(" "+t._s(t.callDurationStats.grouppedByDay.subTitle)+" ")])])],1),o("v-col",{attrs:{cols:"12",sm:"12",lg:"6"}},[o("base-material-chart-card",{attrs:{data:t.callDurationStats.grouppedByMonth.data,options:t.callDurationStats.grouppedByMonth.options,"hover-reveal":"",type:"Bar"},scopedSlots:t._u([{key:"actions",fn:function(){return[o("v-icon",{staticClass:"mr-1"},[t._v(" mdi-clock-outline ")]),o("span",{staticClass:"h5 mb-0 caption black--text font-weight-dark"},[t._v("Call Duration last 12 Months")])]},proxy:!0}])},[o("h4",{staticClass:"card-title font-weight-light mt-2 ml-2"},[t._v(" "+t._s(t.callDurationStats.title)+" ")]),o("p",{staticClass:"d-inline-flex font-weight-light ml-2 mt-1"},[t._v(" "+t._s(t.callDurationStats.grouppedByMonth.subTitle)+" ")])])],1)],1),o("v-divider"),o("filter-list-dialog",{attrs:{"dialog-name":t.merchantListDialog,title:"Select Merchant","selected-item":t.selectedMerchants,items:t.cscMerchants},on:{"close-modal":function(a){t.closeFilterListDialog(t.merchantFilterTitle)},"update-selected-item":function(a){t.selectedMerchants=a}}}),o("filter-list-dialog",{attrs:{"dialog-name":t.specialitiesListDialog,title:"Select Speciality","selected-item":t.selectedSpecialities,items:t.specialities},on:{"close-modal":function(a){t.closeFilterListDialog(t.specialityFilterTitle)},"update-selected-item":function(a){t.selectedSpecialities=a}}})],1)},s=[],i=(o("d3b7"),o("00a1")),l=o.n(i),n=o("be2b"),r={name:"AdminStats",components:{FilterListDialog:function(){return o.e("chunk-0665120e").then(o.bind(null,"1315"))},StatsCard:function(){return o.e("chunk-96cccd12").then(o.bind(null,"1b4b"))}},mixins:[n["a"]],data:function(){return{cscMerchants:[],merchantFilterTitle:"Merchants",merchantFilterValue:0,merchantFilterSubText:"All Merchants",selectedMerchants:[],merchantListDialog:!1,specialities:[],specialityFilterTitle:"Specialities",specialityFilterValue:0,specialityFilterSubText:"All Specialities",selectedSpecialities:[],specialitiesListDialog:!1,cscStates:[],cscDistricts:[],stateListDialog:!1,districtListDialog:!1,stateFilterSubText:"All States",districtFilterSubText:"All Districts",selectedStates:[],selectedDistricts:[],statesFilterTitle:"States",statesFilterValue:0,districtsFilterTitle:"Districts",districtsFilterValue:0,consultationStats:{title:"Consultations title",stats:{},grouppedByDay:{data:{labels:[],series:[]},options:{lineSmooth:this.$chartist.Interpolation.cardinal({tension:0}),low:0,high:0,chartPadding:{top:0,right:0,bottom:0,left:0}},subTitle:"Consultations daily subTitle"},grouppedByMonth:{data:{labels:[],series:[]},options:{lineSmooth:this.$chartist.Interpolation.cardinal({tension:0}),low:0,high:0,chartPadding:{top:0,right:10,bottom:0,left:15}},subTitle:"Consultations monthly subTitle"}},patientStats:{count:0,title:"patient title",grouppedByWeek:{data:{labels:[],series:[]},options:{lineSmooth:this.$chartist.Interpolation.cardinal({tension:0}),low:0,high:0,chartPadding:{top:0,right:0,bottom:0,left:0}},subTitle:"patient weekly subTitle"},grouppedByMonth:{data:{labels:[],series:[]},options:{lineSmooth:this.$chartist.Interpolation.cardinal({tension:0}),low:0,high:0,chartPadding:{top:0,right:10,bottom:0,left:15}},subTitle:"patient monthly subTitle"}},datePicker:{dateFormat:"D MMM YYYY",dateOne:"",dateTwo:"",endDate:"",subText:"Selected Dates"},doctorStats:{approvedCount:0,totalCount:0,title:"doctor title",grouppedByWeek:{data:{labels:[],series:[]},options:{lineSmooth:this.$chartist.Interpolation.cardinal({tension:0}),low:0,high:0,chartPadding:{top:0,right:0,bottom:0,left:0}},subTitle:"doctor weekly subTitle"},grouppedByMonth:{data:{labels:[],series:[]},options:{lineSmooth:this.$chartist.Interpolation.cardinal({tension:0}),low:0,high:0,chartPadding:{top:0,right:10,bottom:0,left:15},plugins:[l()()]},subTitle:"doctor monthly subTitle"}},callDurationStats:{minCallDuration:0,avgCallDuration:0,maxCallDuration:0,totalCallDuration:0,totalVideoConsultations:0,title:"call title",grouppedByDay:{data:{labels:[],series:[]},options:{lineSmooth:this.$chartist.Interpolation.cardinal({tension:0}),low:0,high:0,chartPadding:{top:0,right:0,bottom:0,left:0}},subTitle:"call daily subTitle"},grouppedByMonth:{data:{labels:[],series:[]},options:{lineSmooth:this.$chartist.Interpolation.cardinal({tension:0}),low:0,high:0,chartPadding:{top:0,right:10,bottom:0,left:15}},subTitle:"call monthly subTitle"}},paymentStats:{totalAmount:0}}},watch:{},created:function(){this.getPatientStats(),this.getPaymentStats()},methods:{getPatientStats:function(){var t=this;this.$http.get("/users/patients_stats").then((function(a){a.count&&(t.patientStats.count=a.count),a.groupped_by_week&&t.handleChartData("patientStats","weekly",a.groupped_by_week),a.groupped_by_month&&t.handleChartData("patientStats","monthly",a.groupped_by_month)})).catch((function(t){console.log(t)}))},getPaymentStats:function(){var t=this;this.$http.get("/payment_notifications/payments").then((function(a){t.paymentStats.totalAmount=a.payment_amount})).catch((function(t){console.log(t)}))}}},c=r,d=(o("691d"),o("2877")),u=o("6544"),p=o.n(u),h=o("62ad"),g=o("ce7e"),m=o("132d"),b=o("0fd9"),f=Object(d["a"])(c,e,s,!1,null,null,null);a["default"]=f.exports;p()(f,{VCol:h["a"],VDivider:g["a"],VIcon:m["a"],VRow:b["a"]})},6861:function(t,a,o){},"691d":function(t,a,o){"use strict";o("6861")}}]);
//# sourceMappingURL=chunk-49137392.b38162ce.js.map