<template>
  <admin v-if="isAdmin" />
  <partner v-else />
</template>

<script>
  export default {
    name: 'ConsultationStats',
    components: {
      Admin: () => import('./admin'),
      Partner: () => import('./partner'),
    },
    computed: {
      isAdmin () {
        return this.$store.getters.isAdmin
      },
    },
  }
</script>
