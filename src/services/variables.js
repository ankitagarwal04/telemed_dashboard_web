import { http } from './api'

export default function (Vue) {
  Vue.prototype.$contactEmail = 'helpdesk@csc.gov.in'
  Vue.prototype.$contactNumber = '1800-121-3468'
  Vue.prototype.$http = http
}
