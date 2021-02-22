<template>
  <card
    :icon="icon"
    class="v-card--material-stats"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-slot:after-heading>
      <div
        v-if="isDatePicker"
        class="ml-auto text-right"
      >
        <div
          class="body-3 grey--text font-weight-light"
          v-text="title"
        />
        <v-btn
          id="datepicker-trigger"
          depressed
        >
          Select
        </v-btn>
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
        />
      </div>
      <div
        v-else
        class="ml-auto text-right"
      >
        <div
          class="body-3 grey--text font-weight-light"
          v-text="title"
        />
        <v-btn
          v-if="isContainModal"
          depressed
          @click="$emit('show-modal')"
        >
          {{ modalButtonText }}
        </v-btn>
        <h3
          v-else
          class="font-weight-light text--primary"
        >
          {{ value }}
        </h3>
      </div>
    </template>

    <template v-slot:default>
      <v-col
        cols="12"
        class="px-0"
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
          class="ml-2 mr-1"
          v-for="(value, key) in subStats"
          :key="key"
        >
          <span>
            <v-icon
              size="16"
              class="ml-2 mr-1"
            >
              {{ value.icon }}
            </v-icon>
            {{ value.count }}
          </span>
          <p class="mt-2">{{ key.toUpperCase() }}</p>
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
    components: {
      Card: () => import('@/components/Card'),
    },
    props: {
      icon: {
        type: String,
        required: true,
      },
      subIcon: {
        type: String,
        default: undefined,
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
        type: Object,
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
