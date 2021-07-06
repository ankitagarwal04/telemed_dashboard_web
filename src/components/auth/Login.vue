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
        <p class="text-right mt-2">
          <router-link to="/auth/forgot_password">Forgot password ?</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
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
        this.$store.dispatch('retrieveToken', {
          email: this.userCredentials.emailAddress,
          password: this.userCredentials.password,
        }).then(response => {
          this.$router.push({ name: 'Dashboard' })
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
