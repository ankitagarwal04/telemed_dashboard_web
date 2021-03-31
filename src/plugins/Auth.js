// authplugin is accessed only in vuex store.
var AuthPlugin = {
  setToken: function (token) {
    localStorage.setItem('authToken', token)
  },

  destroyToken: function () {
    localStorage.removeItem('authToken')
  },

  getToken: function () {
    var token = localStorage.getItem('authToken')
    if (token) {
      return token
    } else {
      return null
    }
  },

  // store getter loggedIn method is used for this purpose.
  // loggedIn: function () {
  //   if (this.getToken()) {
  //     return true
  //   } else {
  //     return false
  //   }
  // },

}

export default function (Vue) {
  Vue.auth = AuthPlugin

  Object.defineProperties(Vue.prototype, {
    $auth: {
      get: function () {
        return Vue.auth
      },
    },
  })
}
