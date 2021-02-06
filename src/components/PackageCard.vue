<template>
  <v-dialog
  v-model="show"
  persistent
  max-width="600px"
  >

  <v-card>
    <v-card-title>
      <span class="headline">Package {{ current.name}} {{current.version}}</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <div>
          {{getKeywordString(currentPackage)}}
        </div>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              List files
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div v-for="file in packageFiles">{{ file }}</div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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
    value: Boolean,
    current: Object
  },
  methods: {
    getKeywordString(currentPackage ) {
      if(currentPackage?.keywords === undefined || currentPackage?.keywords === null)
      {
        return null;
      }

      return currentPackage.keywords.join(', ')
    }
  },
  computed: {
    currentPackage() {
      return this.$store.getters['packageListModule/currentPage'](this.current.name)
    },
    packageFiles() {
      return this.$store.getters['packageFilesModule/packageFiles']
    },
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
