(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-96cccd12"],{"1b4b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card",t._g(t._b({staticClass:"v-card--material-stats dashboard-stats",style:{border:t.borderStyle(t.iconBgColor)},attrs:{icon:t.icon,"icon-bg-color":t.iconBgColor,"outer-icon-bg-color":t.outerIconBgColor},scopedSlots:t._u([{key:"after-heading",fn:function(){return[t.isDatePicker?a("div",{staticClass:"ml-auto text-right"},[a("button",{staticClass:"v-btn v-btn--is-elevated theme--light p-2 m-0",attrs:{id:"datepicker-trigger"},on:{click:function(e){return t.$emit("show-modal")}}},[t._v(" Date ")]),a("AirbnbStyleDatepicker",{staticStyle:{right:"0"},attrs:{"trigger-element-id":"datepicker-trigger",mode:"range","fullscreen-mobile":!0,"date-one":t.datePicker.dateOne,"date-two":t.datePicker.dateTwo,"end-date":t.datePicker.endDate},on:{"date-one-selected":function(e){t.datePicker.dateOne=e},"date-two-selected":function(e){t.datePicker.dateTwo=e},apply:function(e){return t.$emit("format-dates",t.datePicker)},cancelled:function(e){return t.$emit("reset-dates")}}})],1):a("div",{staticClass:"ml-auto text-right"},[t.title?a("div",{staticClass:"body-3 grey--text font-weight-light",domProps:{textContent:t._s(t.title)}}):t._e(),t.isContainModal?a("button",{staticClass:"v-btn v-btn--is-elevated theme--light p-2 m-0",on:{click:function(e){return t.$emit("show-modal")}}},[t._v(" "+t._s(t.modalButtonText)+" ")]):t._e(),a("h3",{staticClass:"text--primary counter-class text-right mt-3"},[a("animated-number",{attrs:{value:t.value,formatValue:t.formatToPrice,duration:t.animateSettings.duration,delay:t.animateSettings.delay}})],1)])]},proxy:!0},{key:"default",fn:function(){return[a("v-col",{staticClass:"px-0 py-0",attrs:{cols:"12"}},[a("v-divider")],1)]},proxy:!0},{key:"below-heading",fn:function(){return[t.displaySubStats(t.title)?a("div",{staticClass:"d-flex grow flex-wrap justify-content-between"},t._l(t.subStats,(function(e){return a("div",{key:e.title,staticClass:"ml-2 mr-1 d-flex justify-content-between"},[e.icon?a("div",{staticClass:"mr-3"},[a("font-awesome-icon",{staticClass:"ml-2 mr-1",style:{color:e.color},attrs:{icon:e.icon}})],1):t._e(),a("div",{style:{color:e.color}},[a("h3",{staticClass:"counter-class"},[a("animated-number",{attrs:{value:e.count,formatValue:t.formatToPrice,duration:t.animateSettings.duration,delay:t.animateSettings.delay}})],1),a("h6",{staticClass:"mt-2"},[t._v(t._s(e.title.toUpperCase()))])])])})),0):a("div",[a("v-icon",{staticClass:"ml-2 mr-1",attrs:{color:t.subIconColor,size:"16"}},[t._v(" "+t._s(t.subIcon)+" ")]),a("span",{staticClass:"caption grey--text font-weight-light",class:t.subTextColor,domProps:{textContent:t._s(t.subText)}})],1)]},proxy:!0}])},"card",t.$attrs,!1),t.$listeners))},o=[],i=(a("caad"),a("a9e3"),a("b680"),a("d3b7"),{name:"StatsCard",inheritAttrs:!1,data:function(){return{animateSettings:{duration:1e3,delay:300}}},components:{Card:function(){return a.e("chunk-725cd985").then(a.bind(null,"ae8d"))},AnimatedNumber:function(){return a.e("chunk-2d0a3caa").then(a.t.bind(null,"044d",7))}},props:{icon:{type:Array,required:!0},subIcon:{type:String,default:void 0},iconBgColor:{type:String,default:"#e8bd14"},outerIconBgColor:{type:String,default:"#f6d365de"},subIconColor:{type:String,default:void 0},subTextColor:{type:String,default:void 0},subText:{type:String,default:void 0},title:{type:String,default:void 0},value:{type:Number,default:void 0},subStats:{type:Array,default:void 0},isContainModal:{type:Boolean,default:!1},showModal:{type:Boolean,default:void 0},modalButtonText:{type:String,default:void 0},isDatePicker:{type:Boolean,default:void 0},datePicker:{type:Object,default:void 0}},methods:{displaySubStats:function(t){return!!["Consultations","Call Durations"].includes(t)},borderStyle:function(t){return"3px solid ".concat(t)},formatToPrice:function(t){return t.toFixed(0)}}}),r=i,s=(a("4c8a"),a("95bf"),a("2877")),l=a("6544"),c=a.n(l),d=a("62ad"),u=a("ce7e"),f=a("132d"),m=Object(s["a"])(r,n,o,!1,null,"1be7cfcd",null);e["default"]=m.exports;c()(m,{VCol:d["a"],VDivider:u["a"],VIcon:f["a"]})},3225:function(t,e,a){},"4c8a":function(t,e,a){"use strict";a("3225")},9038:function(t,e,a){},"95bf":function(t,e,a){"use strict";a("9038")}}]);
//# sourceMappingURL=chunk-96cccd12.215a4bd2.js.map