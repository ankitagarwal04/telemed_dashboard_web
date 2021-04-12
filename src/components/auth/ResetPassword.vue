<template>
  <!-- eslint-disable -->
  <div class="auth-reset-password">
    <div v-if="userValidated">
      <form class="p-4" v-on:submit.prevent="onSubmit()">
        <h3 class="text-center">Reset Password</h3>

        <div class="form-group pt-2">
          <label class="font-weight-bold">Password</label>
          <input
           type="password"
           class="form-control form-control-lg"
           v-model="dashboardUser.password"
           required
          />
        </div>

        <div class="form-group pt-2">
          <label class="font-weight-bold">Password Confirmation</label>
          <input
           type="password"
           class="form-control form-control-lg"
           v-model="dashboardUser.passwordConfirmation"
           required
          />
        </div>

        <button
         type="submit"
         class="btn btn-dark btn-lg btn-block"
        >
          Update Password
        </button>
      </form>
    </div>
    <div v-else>
      <p> User not validated </p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ResetPassword',
    data () {
      return {
        dashboardUser: {
          password: '',
          passwordConfirmation: '',
        },
        userValidated: false,
      }
    },
    created () {
      this.validateUser()
    },
    methods: {
      validateUser: function () {
        this.$http.post('/password/validate_token', {
          token: this.$route.query.token,
        }).then((response) => {
          console.log(response)
          this.userValidated = true
        }).catch((error) => {
          // handle error
          console.log(error)
          this.$alertify.error(error.messages[0].errors[0].message)
        })
      },
      onSubmit: function () {
        this.resetPassword()
      },
      resetPassword: function () {
        this.$http.post('/password/reset/edit', {
          dashboard_user: {
            password: this.dashboardUser.password,
            password_confirmation: this.dashboardUser.passwordConfirmation,
          },
          token: this.$route.query.token,
        }).then((response) => {
          console.log(response)
          this.$router.push({ name: 'Login' })
          this.$alertify.success(response.message)
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },
    },
  }
</script>
<style lang="scss" scoped>
  @import "@/assets/style/auth.scss";
</style>
