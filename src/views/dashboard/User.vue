<template>
  <!-- https://bootstrap-vue.org/docs/components/table -->
  <div class="container">
    <b-table
      striped
      hover
      :items="users"
      :fields="fields"
    >
      <template #cell(index)="data">
        {{ data.index + 1 }}
      </template>
    </b-table>
  </div>
</template>
<script>
  export default {
    name: 'Users',
    data () {
      return {
        fields: ['index', 'id', 'username', 'email', 'merchantName'],
        users: [],
      }
    },
    created () {
      this.getDashboardUsers()
    },
    methods: {
      getDashboardUsers: function () {
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
    },
  }
</script>
<style></style>
