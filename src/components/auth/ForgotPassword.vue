<template>
  <!-- eslint-disable -->
  <div class="auth-forgot-password">
    <div>
      <form class="p-4" v-on:submit.prevent="onSubmit()">
        <h3 class="text-center">Forgot Password</h3>

        <div class="form-group pt-2">
          <label class="font-weight-bold">Email address</label>
          <input
           type="email"
           class="form-control form-control-lg"
           v-model="emailAddress"
           required
          />
        </div>
        <button
         type="submit"
         class="btn btn-dark btn-lg btn-block"
        >
          Reset Password
        </button>

      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ForgotPassword',
    data () {
      return {
        emailAddress: '',
      }
    },
    methods: {
      onSubmit: function () {
        this.triggerResetPassword()
      },
      triggerResetPassword: function () {
        this.$http.post('/password/reset', {
          email: this.emailAddress,
        }).then((response) => {
          console.log(response)
          this.$router.push({ name: 'root' })
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
