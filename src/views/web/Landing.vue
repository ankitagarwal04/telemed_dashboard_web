<template>
  <div>
    <hero />
    <stats-display />
    <about />
    <service />
    <testimonial />
    <partner />
  </div>
</template>

<script>
  export default {
    name: 'Landing',
    components: {
      Hero: () => import('@/views/web/components/landing/Hero'),
      StatsDisplay: () => import('@/views/web/components/landing/StatsDisplay'),
      About: () => import('@/views/web/components/landing/About'),
      Service: () => import('@/views/web/components/landing/Service'),
      Partner: () => import('@/views/web/components/landing/Partner'),
      Testimonial: () => import('@/views/web/components/landing/Testimonial'),
    },
  }
</script>

<style lang="scss">
  // this modal is present in service component.
  #bv-modal-service {
    .modal-content {
      background-color: #3fc1c9 !important;
      .modal-header {
        border-bottom: 1px solid #8785a2 !important;
      }
    }
  }
</style>
