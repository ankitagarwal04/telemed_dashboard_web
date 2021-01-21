<template>
  <v-container
    id="regular-tables"
    fluid
    tag="section"
  >
    <button @click="increment">
      load requests
    </button>
  </v-container>
</template>

<script>
  export default {
    data: function () {
      return {
        requests: [],
      }
    },
    methods: {
      increment () {
        this.axios.get('http://localhost:3000/requests/index').then((response) => {
          this.requests = response.data
        }).catch((error) => {
          // handle error
          console.log(error)
        })
      },
    },
  }
</script>
