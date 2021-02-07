<template>
  <div class="text-center ma-2">
    <v-btn dark @click="test">Open Snackbar</v-btn>
    <v-snackbar v-model="snackbar">{{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "AlertComponent",
  data() {
    return {
      text: "123",
      snackbar: false
    }
  },
  methods: {
    test(){
      this.$store.dispatch('alertsModule/sendMessage', "aaaaaaa")
      this.snackbar = true
    }
  },
  created () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'alerts/sendMessage') {
        this.text = state.text
        this.snackbar = true
      }
    })
  }
}
</script>

<style scoped>

</style>