<template>
  <div>
    <hero />
    <stats-display />
    <about />
    <service />
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
    },
  }
</script>

<style lang="scss">
</style>
