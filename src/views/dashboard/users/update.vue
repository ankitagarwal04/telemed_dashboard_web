<template>
  <!-- eslint-disable -->
  <div>
    <form class="p-4" v-on:submit.prevent="onSubmit()">
      <h3 class="text-center">Update User</h3>

      <div class="form-group pt-2">
        <label class="font-weight-bold">User Name</label>
        <input
         type="text"
         class="form-control form-control-lg"
         v-model="dashboardUser.username"
         required
         disabled
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
        Update
      </button>

    </form>
  </div>
</template>

<script>
  import store from '@/store'
  export default {
    name: 'Update',
    data () {
      return {
        dashboardUser: {
          id: '',
          username: '',
          emailAddress: '',
          cscMerchantId: null,
        },
        cscMerchants: [],
      }
    },
    created () {
      this.updateUserId(this.$route.params.id)
      this.getUser()
      this.getCscMerchants()
    },
    methods: {
      updateUserId: function (userId) {
        this.dashboardUser.id = userId
      },
      getUser: function () {
        this.$http.get('/dashboard_users/' + this.dashboardUser.id).then((response) => {
          this.dashboardUser.username = response.username
          this.dashboardUser.emailAddress = response.email
          this.dashboardUser.cscMerchantId = response.merchant_id
          // this.cscMerchants.push({ value: response.merchant_id, text: response.merchant_name })
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },
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
      updateUser: function () {
        this.$http.put('/dashboard_users/' + this.dashboardUser.id, {
          dashboard_user: {
            email: this.dashboardUser.emailAddress,
            dashboard_csc_merchant_id: this.dashboardUser.cscMerchantId,
          },
        }).then((response) => {
          this.$router.push({ name: 'RegisteredUsers' })
          store.commit('SET_SUCCESS_MESSAGE', 'User Successfully Updated')
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },
      onSubmit: function () {
        this.updateUser()
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/style/auth.scss";
</style>
