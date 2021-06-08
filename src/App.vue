<template>
  <div id="app">
    <router-view name="navbar" />
    <b-alert
      :show="error.dismissCountDown"
      variant="danger"
      dismissible
      align="center"
      @dismissed="error.dismissCountDown=0"
    >
      {{ errorMessage }}
    </b-alert>
    <b-alert
      :show="success.dismissCountDown"
      variant="success"
      dismissible
      align="center"
      @dismissed="success.dismissCountDown=0"
    >
      {{ successMessage }}
    </b-alert>
    <router-view />
    <router-view name="footer" />
  </div>
</template>

<script>
  // reference: https://stackoverflow.com/questions/49354607/vue-js-data-is-not-updating-with-state-change-so-the-re-render-does-not-happen
  import { mapState } from 'vuex'
  import store from './store'

  export default {
    name: 'App',
    data () {
      return {
        error: {
          dismissSecs: 5,
          dismissCountDown: 0,
        },
        success: {
          dismissSecs: 5,
          dismissCountDown: 0,
        },
      }
    },
    computed: {
      ...mapState(['errorMessage', 'successMessage']),
    },
    watch: {
      errorMessage () {
        if (this.errorMessage !== null && this.errorMessage !== '') {
          this.error.dismissCountDown = this.error.dismissSecs
          setTimeout(() => store.commit('SET_ERROR_MESSAGE', null), ((this.error.dismissSecs + 1) * 1000))
        }
      },
      successMessage () {
        if (this.successMessage !== null && this.successMessage !== '') {
          this.success.dismissCountDown = this.success.dismissSecs
          setTimeout(() => store.commit('SET_SUCCESS_MESSAGE', null), ((this.success.dismissSecs + 1) * 1000))
        }
      },
    },
  }
  // logic:
  // - when errorMessage state is updated, alert is shown and it is dismissed after certain seconds as defined in dismissSecs reactive data property.
  // - errorMessage state is assigned back to null after +1 seconds of alert dismissal. This is done so that error can be displayed again if reoccur, if state is not updated to null then error won't be displayed again unless refreshed.
</script>
