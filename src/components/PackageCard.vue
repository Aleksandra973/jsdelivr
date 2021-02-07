<template>
  <v-dialog
  v-model="show"
  persistent
  scrollable
  max-width="800px"
  >

  <v-card>
    <v-card-title>
      <span class="headline">Package {{ current.name}} {{current.version}}</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row no-gutters>
          <v-col cols="4">
            <div class="card-title-title">Keywords:</div>
          </v-col>
          <v-col cols="8">
            <div>{{getKeywordString(currentPackage)}}</div>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="4">
            <div class="card-title-title">Maintainers:</div>
          </v-col>
          <v-col cols="8">
            <div>{{getMaintainersStrings(currentPackage)}}</div>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="4">
            <div class="card-title-title">Home page:</div>
          </v-col>
          <v-col cols="8">
            <div v-if="currentPackage.links">{{currentPackage.links.homepage}}</div>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="4">
            <div class="card-title-title">Repository:</div>
          </v-col>
          <v-col cols="8">
            <div v-if="currentPackage.links">{{currentPackage.links.repository}}</div>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="4">
            <div class="card-title-title">Files:</div>
          </v-col>
          <v-col cols="8">
            <PartialCollapseBlock>
              <div v-for="file in packageFiles" class="file-item">{{ file }}</div>
            </PartialCollapseBlock>
          </v-col>
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
import PartialCollapseBlock from './PartialCollapseBlock'

export default {
  name: "PackageCard",
  components: { PartialCollapseBlock },
  props: {
    value: Boolean,
    current: Object
  },
  data(){
    return {
      isFullMode: false
    }
  },
  methods: {
    getKeywordString(currentPackage ) {
      if(currentPackage?.keywords === undefined || currentPackage?.keywords === null)
      {
        return null;
      }

      return currentPackage.keywords.join(', ')
    },
    getMaintainersStrings(currentPackage ) {
      if(currentPackage?.maintainers === undefined || currentPackage?.maintainers === null)
      {
        return null;
      }

      return currentPackage.maintainers.map(x=>x.email).join(', ')
    },
    getPackageFiles(){

    }

  },
  computed: {
    currentPackage() {
      return this.$store.getters['packageListModule/currentPage'](this.current.name)
    },
    packageFiles() {
      return this.$store.getters['packageFilesModule/packageFiles']
    },
    packageFilesPreview() {
      return this.$store.getters['packageFilesModule/packageFiles'].slice(0, 3)
    },
    packageFilesWithoutPreview() {
      return this.$store.getters['packageFilesModule/packageFiles'].slice(3)
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

<style scoped lang="scss">
  .card-title-title {
    font-weight: bold;
  }

  .row{
    margin-bottom: 5px;
    margin-top: 5px;
  }

  .file-item {
    padding-left: 12px;
  }

  .toggle-button {
    margin-top: 5px;
  }

</style>
