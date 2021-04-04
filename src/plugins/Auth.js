// authplugin is accessed only from vuex store.
var AuthPlugin = {
  setToken: function (token, user) {
    localStorage.setItem('authToken', token)
    localStorage.setItem('userEmail', user.email)
    localStorage.setItem('userRole', user.role)
  },

  destroyToken: function () {
    localStorage.removeItem('authToken')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userRole')
  },

  getToken: function () {
    var token = localStorage.getItem('authToken')
    if (token) {
      return token
    } else {
      return null
    }
  },

  getUser: function () {
    var user = {
      email: localStorage.getItem('userEmail'),
      role: localStorage.getItem('userRole'),
    }
    return user
  },
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
