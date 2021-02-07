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
        <v-row>
          <v-col cols="4">
            <v-subheader class="card-title-title">Keywords:</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-subheader>{{getKeywordString(currentPackage)}}</v-subheader>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-subheader class="card-title-title">Maintainers:</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-subheader>{{getMaintainersStrings(currentPackage)}}</v-subheader>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-subheader class="card-title-title">Home page:</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-subheader v-if="currentPackage.links">{{currentPackage.links.homepage}}</v-subheader>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-subheader class="card-title-title">Repository:</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-subheader v-if="currentPackage.links">{{currentPackage.links.repository}}</v-subheader>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-subheader class="card-title-title">Files:</v-subheader>
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
