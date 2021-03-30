/* eslint-disable */
// reference: https://gist.github.com/moreta/fb2625c59aa788009b1f7ce8e44ac559
import Vue from 'vue'
import router from '.././router'
import axios from 'axios'
import qs from 'qs'

/**
 *
 * parse error response
 */
function parseError (messages) {
  // error
  if (messages) {
    if (messages instanceof Array) {
      return Promise.reject({ messages: messages })
    } else {
      return Promise.reject({ messages: [messages] })
    }
  } else {
    return Promise.reject({ messages: ['エラーが発生しました'] })
  }
}

/**
 * parse response
 */
function parseBody (response) {
//  if (response.status === 200 && response.data.status.code === 200) { // - if use custom status code
  if (response.status === 200) {
    // return response.data.result
    return response.data.data
  } else {
    return this.parseError(response.data.messages)
  }
}

/**
 * axios instance
 */
var requestBaseURL = process.env.API
const instance = axios.create({
  baseURL: requestBaseURL,
  paramsSerializer: function (params) {
    return qs.stringify(params, { indices: false })
  },
})

// request header
instance.interceptors.request.use((config) => {
  // Do something before request is sent
  var token = Vue.auth.getToken()
  if (token) {
    config.headers = { Authorization: token }
  }
  return config
}, error => {
  return Promise.reject(error)
})

// response parse
instance.interceptors.response.use((response) => {
  return parseBody(response)
}, error => {
  if (error.response) {
    // to show alerts for all errors return from the ruby server.
    if (error.response.data) {
      if (error.response.data.success === false) {
        error.response.data.errors.forEach(function (e) {
          e.message.split(',').forEach(function (errorMsg) {
            // TODO: show errors through alertify.
            // this.$alertify.error(errorMsg)
          })
        })
      }
    }
    return parseError(error.response.data)
  } else {
    return Promise.reject(error)
  }
})

export const http = instance
