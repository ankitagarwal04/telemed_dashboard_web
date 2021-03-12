<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    mobile-break-point="960"
    app
    width="260"
    v-bind="$attrs"
    class="dashboard-drawer"
  >
    <v-list
      dense
      nav
      class="p-0"
    >
      <v-list-item class="p-0 dashboard-avatar">
        <!-- <v-list-item-avatar
          class="align-self-center"
          color="white"
          contain
        > -->
        <v-list-item-avatar
          class="align-self-center"
          contain
        >
          <v-img
            src="~@/assets/images/csc_logo.png"
          />
        </v-list-item-avatar>
      </v-list-item>
      <hr>
    </v-list>

    <v-list
      expand
      nav
      class="navigation-list"
    >
      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <template v-for="(item, i) in computedItems">
        <base-item-group
          v-if="item.children"
          :key="`group-${i}`"
          :item="item"
        >
          <!--  -->
        </base-item-group>

        <base-item
          v-else
          :key="`item-${i}`"
          :item="item"
        />
      </template>

      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import {
    mapState,
  } from 'vuex'

  export default {
    name: 'DashboardCoreDrawer',

    props: {
      expandOnHover: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      items: [
        {
          icon: 'mdi-home-outline',
          title: 'Landing',
          to: '/',
        },
        {
          // icon: 'mdi-view-dashboard',
          icon: 'mdi-poll',
          title: 'dashboard',
          to: '/dashboard',
        },
      ],
    }),

    computed: {
      ...mapState(['barColor', 'barImage']),
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.$store.commit('SET_DRAWER', val)
        },
      },
      computedItems () {
        return this.items.map(this.mapItem)
      },
      profile () {
        return {
          avatar: true,
          title: this.$t('avatar'),
        }
      },
    },

    methods: {
      mapItem (item) {
        return {
          ...item,
          children: item.children ? item.children.map(this.mapItem) : undefined,
          title: this.$t(item.title),
        }
      },
    },
  }
</script>

<style lang="sass">
  @import '~vuetify/src/styles/tools/_rtl.sass'

  #core-navigation-drawer
    .v-list-group__header.v-list-item--active:before
      opacity: .24

    .v-list-item
      &__icon--text,
      &__icon:first-child
        justify-content: center
        text-align: center
        width: 20px

        +ltr()
          margin-right: 24px
          margin-left: 12px !important

        +rtl()
          margin-left: 24px
          margin-right: 12px !important

    .v-list--dense
      .v-list-item
        &__icon--text,
        &__icon:first-child
          margin-top: 10px

    .v-list-group--sub-group
      .v-list-item
        +ltr()
          padding-left: 8px

        +rtl()
          padding-right: 8px

      .v-list-group__header
        +ltr()
          padding-right: 0

        +rtl()
          padding-right: 0

        .v-list-item__icon--text
          margin-top: 19px
          order: 0

        .v-list-group__header__prepend-icon
          order: 2

          +ltr()
            margin-right: 8px

          +rtl()
            margin-left: 8px
</style>

<style lang="scss" unscoped>
  .dashboard-drawer {
    background-color: #99aab5 !important;
    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(0, 0, 139, 0.75);
    .dashboard-avatar {
      min-height: 60px;
      .v-list-item__avatar {
        height: 50px !important;
        width: 100% !important;
        border-radius: 0;
        margin: 0 !important;
      }
      .v-image__image--cover {
        background-position: unset !important;
        background-size: contain !important;
        left: 30px;
      }
    }
    .navigation-list {
      // this class is appended to the side nav active list item.
      .primary {
        background-color: #00008b !important;
        color: white !important;
        box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(0, 0, 139, 0.75);
      }
      .v-list-item__title {
        font-size: 18px !important;
      }
      a {
        &:hover {
          text-decoration: none;
        };
      }
    }
  }
</style>
