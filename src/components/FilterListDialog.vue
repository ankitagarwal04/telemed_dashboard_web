<template>
  <v-dialog
    v-model="dialogName"
    max-width="500"
  >
    <v-card>
      <v-card-title>
        {{ title }}
        <v-spacer />

        <v-icon
          aria-label="Close"
          @click="$emit('close-modal')"
        >
          mdi-close
        </v-icon>
      </v-card-title>
      <v-divider />
      <v-list dense>
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
          multiple=true
          :change="$emit('update-selected-item', selectedItem)"
        >
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="item.id"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-dialog>
</template>
<script>
  export default {
    name: 'FilterListDialog',
    props: {
      dialogName: {
        type: Boolean,
        default: undefined,
      },
      title: {
        type: String,
        default: undefined,
      },
      selectedItem: {
        type: Array,
        default: undefined,
      },
      items: {
        type: Array,
        default: undefined,
      },
    },
  }
</script>
