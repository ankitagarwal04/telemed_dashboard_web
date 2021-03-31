import Vue from 'vue'
import Vuex from 'vuex'
import { http } from './services/api'
import Auth from './plugins/Auth.js'

Vue.use(Vuex)
Vue.use(Auth)

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
    drawer: null,
    authToken: Vue.auth.getToken() || null,
  },
  getters: {
    loggedIn (state) {
      return state.authToken != null
    },
    getToken (state) {
      return state.authToken
    },
  },
  mutations: {
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    retrieveToken (state, authToken) {
      state.authToken = authToken
    },
    destroyToken (state) {
      state.authToken = null
    },
  },
  actions: {
    destroyToken (context) {
      return new Promise((resolve, reject) => {
        Vue.auth.destroyToken()
        context.commit('destroyToken')
        resolve('')
      })
    },
    retrieveToken (context, credentials) {
      return new Promise((resolve, reject) => {
        http.post('/authenticate', {
          email: credentials.email,
          password: credentials.password,
        }).then((response) => {
          Vue.auth.setToken(response.auth_token)
          context.commit('retrieveToken', response.auth_token)
          resolve(response)
        }).catch((error) => {
          // handle error
          console.log(error)
          reject(error)
        })
      })
    },
  },
})
