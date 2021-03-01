<template>
  <base-material-card
    class="v-card--material-chart"
    color="#ffe2e5"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-slot:heading>
      <chartist
        :data="data"
        :event-handlers="eventHandlers"
        :options="options"
        :ratio="ratio"
        :responsive-options="responsiveOptions"
        :type="type"
        style="max-height: 150px;"
      />
    </template>

    <slot
      slot="reveal-actions"
      name="reveal-actions"
    />

    <slot />

    <slot
      slot="actions"
      name="actions"
    />
  </base-material-card>
</template>

<script>
  export default {
    name: 'MaterialChartCard',

    inheritAttrs: false,

    props: {
      data: {
        type: Object,
        default: () => ({}),
      },
      eventHandlers: {
        type: Array,
        default: () => ([]),
      },
      options: {
        type: Object,
        default: () => ({}),
      },
      ratio: {
        type: String,
        default: undefined,
      },
      responsiveOptions: {
        type: Array,
        default: () => ([]),
      },
      type: {
        type: String,
        required: true,
        validator: v => ['Bar', 'Line', 'Pie'].includes(v),
      },
    },
  }
</script>

<style lang="sass">
  // https://gionkunz.github.io/chartist-js/getting-started.html#colour-up-your-charts
  .v-card--material-chart
    p
      color: #999

    .v-card--material__heading
      max-height: 185px

      // axis labels
      .ct-label
        // color: #fff !important
        color: #3f4254 !important
        opacity: .7
        font-size: 0.975rem
        font-weight: 100

      // checks
      .ct-grid
        // stroke: #343a40
        stroke: #f64e60

      .ct-series-a .ct-point,
      .ct-series-a .ct-line,
      .ct-series-a .ct-bar,
      .ct-series-a .ct-slice-donut
          // stroke: rgba(255,255,255,.8)
          color: #3f4254 !important

      .ct-series-a .ct-slice-pie,
      .ct-series-a .ct-area
          fill: rgba(255,255,255,.4)
</style>
