<template>
  <v-footer
    id="dashboard-core-footer"
    class='bg-dark'
  >
    <v-container>
      <v-row
        align="center"
        no-gutters
      >
        <v-col
          v-for="(link, i) in links"
          :key="i"
          class="text-center mb-sm-0 mb-5"
          cols="auto"
        >
          <a
            :href="link.href"
            class="mr-0 text-white text--darken-3"
            rel="noopener"
            target="_blank"
            v-text="link.text"
          />
        </v-col>

        <v-spacer class="hidden-sm-and-down" />

        <v-col
          cols="12"
          md="auto"
        >
          <div class="text-body-1 font-weight-light pt-6 pt-md-0 text-center text-white">
            Copyright &copy; 2018 CSC e-Governance services India Ltd. All Rights Reserved
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'DashboardCoreFooter',

    data: () => ({
      links: [
        {
          href: process.env.VUE_APP_VLE_URL,
          text: 'VLE',
        },
        {
          href: process.env.VUE_APP_DOCTOR_URL,
          text: 'DOCTOR',
        },
        {
          href: '/dashboard',
          text: 'DASHBOARD',
        },
      ],
    }),
  }
</script>

<style lang="sass">
  #dashboard-core-footer
    a
      font-size: .825rem
      font-weight: 500
      text-decoration: none
      text-transform: uppercase
</style>
