<template>
  <v-card
    v-bind="$attrs"
    :class="classes"
    class="v-card--material pa-3"
  >
    <div class="d-flex grow flex-wrap">
      <v-sheet
        :class="{
          'pa-7': !$slots.image
        }"
        :color="color"
        :max-height="icon ? 90 : undefined"
        :width="icon ? 'auto' : '100%'"
        elevation="6"
        class="text-start v-card--material__heading mb-n6"
        dark
      >
        <font-awesome-icon
          :icon="icon"
          size="2x"
        />
      </v-sheet>

      <div
        v-if="$slots['after-heading']"
        class="ml-6"
      >
        <slot name="after-heading" />
      </div>
    </div>

    <slot />

    <template v-if="$slots['below-heading']">
      <slot name="below-heading" />
    </template>
  </v-card>
</template>

<script>
  export default {
    name: 'Card',
    props: {
      color: {
        type: String,
        default: 'success',
      },
      icon: {
        type: Array,
        default: undefined,
      },
    },
    computed: {
      classes () {
        return {
          'v-card--material--has-heading': this.hasHeading,
        }
      },
      hasHeading () {
        return Boolean(this.$slots.heading || this.title || this.icon)
      },
      hasAltHeading () {
        return Boolean(this.$slots.heading || (this.title && this.icon))
      },
    },
  }
</script>

<style lang="sass">
  .v-card--material
    height: 80%
    &__heading
      position: relative
      top: -40px
      transition: .3s ease
      z-index: 1
</style>
<style lang="scss" scoped>
  .v-card--material__heading {
    box-shadow: none !important;
  }
</style>
