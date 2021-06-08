<template>
  <!-- https://bootstrap-vue.org/docs/components/table -->
  <div class="container">
    <b-table
      striped
      hover
      :items="users"
      :fields="fields"
    >
      <template #cell(index)="slotProps">
        {{ slotProps.index + 1 }}
      </template>
      <template #cell(action)="slotProps">
        <font-awesome-icon
          :icon="['fa', 'pen']"
          class="icons-size mr-2"
          size="1x"
        />
        <font-awesome-icon
          :icon="['fa', 'trash-alt']"
          class="icons-size"
          size="1x"
          @click="deleteUser(slotProps.item.id)"
        />
      </template>
    </b-table>
  </div>
</template>
<script>
  import store from '@/store'

  export default {
    name: 'Users',
    data () {
      return {
        fields: ['index', 'id', 'username', 'email', 'merchantName', 'action'],
        users: [],
      }
    },
    created () {
      this.getDashboardUsers()
    },
    methods: {
      getDashboardUsers: function () {
        this.users = []
        this.$http.get('/dashboard_users').then((response) => {
          if (response.length > 0) {
            response.forEach((user, index) => {
              this.users.push({
                id: user.id,
                username: user.username,
                email: user.email,
                merchantName: user.csc_merchant_name,
              })
            })
          }
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },
      deleteUser: function (userId) {
        this.$http.delete('/dashboard_users/' + userId).then((response) => {
          console.log(response)
          store.commit('SET_SUCCESS_MESSAGE', response.message)
          this.getDashboardUsers()
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },

    },
  }
</script>
<style></style>
