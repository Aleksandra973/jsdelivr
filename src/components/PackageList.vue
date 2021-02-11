<template>
  <div>
    <v-text-field
        outlined
        prependInnerIcon="mdi-magnify"
        class="col-10"
        placeholder="Search package"
        @keyup.enter="submit"
        v-model="searchString"
    />
    <v-data-table
        :headers="headers"
        :items="packages"
        :options.sync="options"
        :server-items-length="totalPackages"
        :loading="loading"
        @click:row="getInfo"
        class="elevation-1 row-pointer"
    ></v-data-table>
  <PackageCard v-model="modalIsVisible" :current="currentPackage"/>
  </div>
</template>

<script>
import PackageCard from './PackageCard'


export default {
name: "PackageList",
  components: {PackageCard},
  data () {
    return {
      modalIsVisible: false,
      currentPackage: {},
      searchString: '',
      totalPackages: 0,
      packages: [],
      loading: false,
      options: {},
      headers: [
        {
          text: 'Package name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Version', value: 'version',sortable: false, },
        { text: 'Description', value: 'description',sortable: false, },
        { text: 'Author', value: 'author',sortable: false, },
        { text: 'Keywords', value: 'keywords',sortable: false, }
      ],
    }
  },
  methods: {
   async getInfo(row){
     try{
       this.modalIsVisible = true
       this.currentPackage = {
         name: row.name,
         version: row.version
       }
       await this.$store.dispatch('packageFilesModule/getFiles', this.currentPackage)
     } catch (error) {
       console.log(error)
       await this.$store.dispatch('alertsModule/sendMessage', "Error when receive package info")
     }
    },
    async submit() {
      try {
        const { page, itemsPerPage } = this.options
        const searchModel = {
          searchString: this.searchString,
          page: page,
          itemsPerPage: itemsPerPage
        }
        this.loading = true
        await this.$store.dispatch('packageListModule/searchPackage', searchModel)
        const response = this.$store.getters['packageListModule/searchPackage']
        this.totalPackages = response.total
        this.packages = response.list
      }
      catch (e){
        console.log(e)
        await this.$store.dispatch('alertsModule/sendMessage', "Error when execute package search")
      }
      finally {
        this.loading = false
      }

    },
  },
  watch: {
    options: {
     async handler () {
        await this.submit()
      },
      deep: true,
    },
  },
}
</script>

<style scoped>
  .row-pointer >>> tbody tr :hover{
    cursor: pointer;
  }
</style>
