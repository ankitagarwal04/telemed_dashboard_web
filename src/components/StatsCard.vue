<template>
  <card
    :icon="icon"
    :icon-bg-color="iconBgColor"
    :outer-icon-bg-color="outerIconBgColor"
    :style="{'border': borderStyle(iconBgColor)}"
    class="v-card--material-stats dashboard-stats"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-slot:after-heading>
      <div
        v-if="isDatePicker"
        class="ml-auto text-right"
      >
        <button
          id="datepicker-trigger"
          class="v-btn v-btn--is-elevated theme--light p-2 m-0"
          @click="$emit('show-modal')"
        >
          Date
        </button>
        <AirbnbStyleDatepicker
          :trigger-element-id="'datepicker-trigger'"
          :mode="'range'"
          :fullscreen-mobile="true"
          :date-one="datePicker.dateOne"
          :date-two="datePicker.dateTwo"
          :end-date="datePicker.endDate"
          style="right: 0"
          @date-one-selected="val => { datePicker.dateOne = val }"
          @date-two-selected="val => { datePicker.dateTwo = val }"
          @apply="$emit('format-dates', datePicker)"
          @cancelled="$emit('reset-dates')"
        />
      </div>
      <div
        v-else
        class="ml-auto text-right"
      >
        <div
          v-if="title"
          class="body-3 grey--text font-weight-light"
          v-text="title"
        />
        <button
          v-if="isContainModal"
          class="v-btn v-btn--is-elevated theme--light p-2 m-0"
          @click="$emit('show-modal')"
        >
          {{ modalButtonText }}
        </button>
        <h3
          class="text--primary counter-class text-right mt-3"
        >
          <animated-number
            :value="value"
            :formatValue="formatToPrice"
            :duration="animateSettings.duration"
            :delay="animateSettings.delay"
          />
        </h3>
      </div>
    </template>

    <template v-slot:default>
      <v-col
        cols="12"
        class="px-0 py-0"
      >
        <v-divider />
      </v-col>
    </template>

    <template v-slot:below-heading>
      <div
        v-if="displaySubStats(title)"
        class="d-flex grow flex-wrap justify-content-between"
      >
        <div
          class="ml-2 mr-1 d-flex justify-content-between"
          v-for="substat in subStats"
          :key="substat.title"
        >
          <div
           v-if="substat.icon"
           class="mr-3"
          >
            <font-awesome-icon
              :icon="substat.icon"
              class="ml-2 mr-1"
              :style="{'color': substat.color}"
            />
          </div>
          <div :style="{'color': substat.color}">
            <h3 class="counter-class">
              <animated-number
                :value="substat.count"
                :formatValue="formatToPrice"
                :duration="animateSettings.duration"
                :delay="animateSettings.delay"
              />
            </h3>
            <h6 class="mt-2">{{ substat.title.toUpperCase() }}</h6>
          </div>
        </div>
      </div>
      <div v-else>
        <v-icon
          :color="subIconColor"
          size="16"
          class="ml-2 mr-1"
        >
          {{ subIcon }}
        </v-icon>

        <span
          :class="subTextColor"
          class="caption grey--text font-weight-light"
          v-text="subText"
        />
      </div>
    </template>
  </card>
</template>

<script>
  export default {
    name: 'StatsCard',
    inheritAttrs: false,
    data () {
      return {
        animateSettings: {
          duration: 1000,
          delay: 300,
        },
      }
    },
    components: {
      Card: () => import('@/components/Card'),
      AnimatedNumber: () => import('animated-number-vue'),
    },
    props: {
      icon: {
        type: Array,
        required: true,
      },
      subIcon: {
        type: String,
        default: undefined,
      },
      iconBgColor: {
        type: String,
        default: '#e8bd14',
      },
      outerIconBgColor: {
        type: String,
        default: '#f6d365de',
      },
      subIconColor: {
        type: String,
        default: undefined,
      },
      subTextColor: {
        type: String,
        default: undefined,
      },
      subText: {
        type: String,
        default: undefined,
      },
      title: {
        type: String,
        default: undefined,
      },
      value: {
        type: Number,
        default: undefined,
      },
      subStats: {
        type: Array,
        default: undefined,
      },
      isContainModal: {
        type: Boolean,
        default: false,
      },
      showModal: {
        type: Boolean,
        default: undefined,
      },
      modalButtonText: {
        type: String,
        default: undefined,
      },
      isDatePicker: {
        type: Boolean,
        default: undefined,
      },
      datePicker: {
        type: Object,
        default: undefined,
      },
    },
    methods: {
      displaySubStats: function (value) {
        if (['Consultations', 'Call Durations'].includes(value)) {
          return true
        } else {
          return false
        }
      },
      borderStyle: function (value) {
        return `3px solid ${value}`
      },
      formatToPrice: function (value) {
        return value.toFixed(0)
      },
    },
  }
</script>

<style lang="sass">
.v-card--material-stats
  display: flex
  flex-wrap: wrap
  position: relative

  > div:first-child
    justify-content: space-between

  .v-card
    border-radius: 4px
    flex: 0 1 auto

  .v-card__text
    display: inline-block
    flex: 1 0 calc(100% - 120px)
    position: absolute
    top: 0
    right: 0
    width: 100%

  .v-card__actions
    flex: 1 0 100%
</style>
<style lang="scss" scoped>
  .dashboard-stats {
    .counter-class {
      font-family: Stardos Stencil;
    }
    .card-title {
      font-family: graduate !important;
    }
  }
</style>
