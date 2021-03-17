<template>
  <!-- eslint-disable -->
  <div class="auth-login">
    <div>
      <form class="p-4" v-on:submit.prevent="onSubmit()">
        <h3 class="text-center">Sign In</h3>

        <div class="form-group pt-2">
          <label class="font-weight-bold">Email address</label>
          <input
           type="email"
           class="form-control form-control-lg"
           v-model="userCredentials.emailAddress"
           required
          />
        </div>

        <div class="form-group pt-2">
          <label class="font-weight-bold">Password</label>
          <input
           type="password"
           class="form-control form-control-lg"
           v-model="userCredentials.password"
           required
          />
        </div>

        <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>

        <p class="forgot-password text-right mt-2">
          <router-link to="/forgot-password">Forgot password ?</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        userCredentials: {
          emailAddress: '',
          password: '',
        },
      }
    },
    methods: {
      loginUser: function () {
        this.$http.post('/authenticate', {
          email: this.userCredentials.emailAddress,
          password: this.userCredentials.password,
        }).then((response) => {
          console.log(response)
          this.$auth.setToken(response.auth_token, Date.now() + 14400000) // + 4 hours
          this.$router.push('/dashboard')
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },
      onSubmit: function () {
        this.loginUser()
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/style/auth.scss";
</style>
