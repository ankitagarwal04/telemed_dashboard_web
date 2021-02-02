<template>
  <div>
    <hero />
    <stats-display />
  </div>
</template>

<script>
  export default {
    name: 'Landing',
    components: {
      Hero: () => import('@/views/web/components/landing/Hero'),
      StatsDisplay: () => import('@/views/web/components/landing/StatsDisplay'),
    },
  }
</script>

<style lang="scss">
</style>
