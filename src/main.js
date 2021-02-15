// =========================================================
// * Vuetify Material Dashboard - v2.1.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vuetify-material-dashboard
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
// defining global variables here, including request interceptor
import variable from './services/variables'
import VueCarousel from 'vue-carousel'
import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker'
// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css'

// see docs for available options
// https://mikaeledebro.gitbooks.io/vue-airbnb-style-datepicker/content/INSTALLATION.html
const datepickerOptions = {}

Vue.use(AirbnbStyleDatepicker, datepickerOptions)
Vue.use(BootstrapVue)
Vue.use(VueCarousel)
Vue.use(variable)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app')
