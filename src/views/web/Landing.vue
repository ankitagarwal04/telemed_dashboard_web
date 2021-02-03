<template>
  <div>
    <hero />
    <stats-display />
    <about />
  </div>
</template>

<script>
  export default {
    name: 'Landing',
    components: {
      Hero: () => import('@/views/web/components/landing/Hero'),
      StatsDisplay: () => import('@/views/web/components/landing/StatsDisplay'),
      About: () => import('@/views/web/components/landing/About'),
    },
  }
</script>

<style lang="scss">
</style>
