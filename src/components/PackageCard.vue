<template>
  <v-dialog
  v-model="show"
  persistent
  max-width="600px"
  >

  <v-card>
    <v-card-title>
      <span class="headline">Package info</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>

        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
          color="blue darken-1"
          text
          @click="show = false"
      >
        Close
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "PackageCard",
  props: {
    value: Boolean
  },
  computed: {
    show: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style scoped>

</style>
