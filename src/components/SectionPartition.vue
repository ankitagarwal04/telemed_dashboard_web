<template>
  <div class="section-partition">
    <v-row>
      <v-col
        cols="12"
        xl="12"
      >
        <h5>
          <font-awesome-icon
            :icon="icon"
            class="mr-3"
          />
          {{ title }}
        </h5>
      </v-col>
    </v-row>
  </div>
</template>
<script>
  export default {
    name: 'SectionPartition',
    props: {
      title: {
        type: String,
        required: true,
      },
      icon: {
        type: Array,
        required: true,
      },
    },
  }
</script>
<style lang="scss" scoped>
  .section-partition {
    h5 {
      background-color: $primary-blue-color;
      color: white;
      padding: 10px 8px;
    }
  }
</style>
