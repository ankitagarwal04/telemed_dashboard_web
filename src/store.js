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
    currentUser: Vue.auth.getUser() || null,
    errorMessage: null,
    successMessage: null,
  },
  getters: {
    loggedIn (state) {
      return state.authToken != null
    },
    getToken (state) {
      return state.authToken
    },
    getUser (state) {
      return state.currentUser
    },
    isAdmin (state) {
      if (state.currentUser && state.currentUser.role === 'admin') {
        return true
      } else {
        return false
      }
    },
    errorMessage (state) {
      return state.errorMessage
    },
    successMessage (state) {
      return state.successMessage
    },
  },
  mutations: {
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    SET_ERROR_MESSAGE (state, payload) {
      state.errorMessage = payload
    },
    SET_SUCCESS_MESSAGE (state, payload) {
      state.successMessage = payload
    },
    retrieveToken (state, dataAfterLogin) {
      state.authToken = dataAfterLogin.authToken
      state.currentUser = {
        email: dataAfterLogin.user.email,
        role: dataAfterLogin.user.role,
      }
    },
    destroyToken (state) {
      state.authToken = null
      state.currentUser = null
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
          Vue.auth.setToken(response.auth_token, response.user)
          const dataAfterLogin = {
            authToken: response.auth_token,
            user: response.user,
          }
          context.commit('retrieveToken', dataAfterLogin)
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
