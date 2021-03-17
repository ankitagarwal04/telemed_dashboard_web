<template>
  <!-- eslint-disable -->
  <div class="auth-register">
    <div>
      <form class="p-4">
        <h3 class="text-center">Register</h3>

        <div class="form-group pt-2">
          <label class="font-weight-bold">User Name</label>
          <input type="text" class="form-control form-control-lg"/>
        </div>

        <div class="form-group pt-2">
          <label class="font-weight-bold">Email address</label>
          <input type="email" class="form-control form-control-lg" />
        </div>

        <div class="form-group pt-2">
          <label class="font-weight-bold">Password</label>
          <input type="password" class="form-control form-control-lg" />
        </div>

        <div class="form-group pt-2">
          <label class="font-weight-bold">Merchant</label>
          <input type="password" class="form-control form-control-lg" />
        </div>

        <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {}
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/style/auth.scss";
</style>
