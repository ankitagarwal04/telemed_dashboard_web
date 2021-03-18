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
import Auth from './plugins/Auth.js'
import i18n from './i18n'
// defining global variables here, including request interceptor
import variable from './services/variables'
import VueCarousel from 'vue-carousel'
import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker'
import VueAlertify from 'vue-alertify'
// import font-awesome
// https://github.com/FortAwesome/vue-fontawesome
// https://medium.com/front-end-weekly/how-to-use-fon-awesome-5-on-vuejs-project-ff0f28310821
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css'

// font-awesome
// multiple libraries can be added as well, for ex: library.add(fasCoffee, farCoffee, falCoffee, fadCoffee)
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
// see docs for available options
// https://mikaeledebro.gitbooks.io/vue-airbnb-style-datepicker/content/INSTALLATION.html
const datepickerOptions = {}

Vue.use(AirbnbStyleDatepicker, datepickerOptions)
Vue.use(BootstrapVue)
Vue.use(VueCarousel)
Vue.use(variable)
Vue.use(Auth)
Vue.use(VueAlertify, {
  notifier: {
    // default position
    position: 'top-right',
    // adds a close button to notifier messages
    closeButton: true,
  },
})
Vue.config.productionTip = false

// configure router guards
router.beforeEach(function (to, from, next) {
  // prevent access to 'requireGuest' routes;
  if (to.matched.some(function (record) { return record.meta.requireGuest }) &&
   Vue.auth.loggedIn()) {
    next({
      path: '/dashboard',
    })
  } else {
    next() // make sure to always call next();
  }
})

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app')
