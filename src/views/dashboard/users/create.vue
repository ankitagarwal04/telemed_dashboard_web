<template>
  <!-- eslint-disable -->
  <form class="p-4" v-on:submit.prevent="onSubmit()">
    <h3 class="text-center">Register</h3>

    <div class="form-group pt-2">
      <label class="font-weight-bold">User Name</label>
      <input
       type="text"
       class="form-control form-control-lg"
       v-model="dashboardUser.username"
       required
      />
    </div>

    <div class="form-group pt-2">
      <label class="font-weight-bold">Email address</label>
      <input
       type="email"
       class="form-control form-control-lg"
       v-model="dashboardUser.emailAddress"
       required
      />
    </div>

    <div class="form-group pt-2">
      <label class="font-weight-bold">Password</label>
      <input
       type="password"
       class="form-control form-control-lg"
       v-model="dashboardUser.password"
       required
      />
    </div>

    <div class="form-group pt-3">
      <label class="font-weight-bold">Merchant</label>
      <b-form-select
       v-model="dashboardUser.cscMerchantId"
       :options="cscMerchants"
       class="mb-3"
       required
      />
    </div>

    <button
     type="submit"
     class="btn btn-dark btn-lg btn-block"
    >
      Sign Up
    </button>
  </form>
</template>

<script>
  import store from '@/store'
  export default {
    name: 'Create',
    data () {
      return {
        dashboardUser: {
          username: '',
          emailAddress: '',
          cscMerchantId: null,
          password: '',
        },
        cscMerchants: [
          { value: null, text: 'Please select an option' },
        ],
      }
    },
    created () {
      this.getCscMerchants()
    },
    methods: {
      getCscMerchants: function () {
        this.$http.get('/dashboard_csc_merchants/index').then((response) => {
          if (response.length > 0) {
            response.forEach((merchant, index) => {
              this.cscMerchants.push({ value: merchant.id, text: merchant.name })
            })
          }
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },
      registerUser: function () {
        this.$http.post('/dashboard_users', {
          dashboard_user: {
            username: this.dashboardUser.username,
            email: this.dashboardUser.emailAddress,
            dashboard_csc_merchant_id: this.dashboardUser.cscMerchantId,
            password: this.dashboardUser.password,
          },
        }).then((response) => {
          this.$router.push({ name: 'RegisteredUsers' })
          store.commit('SET_SUCCESS_MESSAGE', 'User Successfully Registered')
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },
      onSubmit: function () {
        this.registerUser()
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/style/auth.scss";
</style>
