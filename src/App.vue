<template>
  <v-app>
    <v-container>

      <v-main>
        <PackageList/>
      </v-main>

    </v-container>


    <v-footer>
      Alexandra - https://github.com/Aleksandra973/jsdelivr
    </v-footer>
  </v-app>
</template>

<script>
import PackageList from './components/PackageList';

export default {
  name: 'App',

  components: {
    PackageList,
  },


};
</script>

<style scoped lang="scss">

  .v-main {
    padding-bottom: 2.5em !important;
  }

  .v-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
    margin: 0 auto;
    display: table;
    text-align: center;
  }
</style>
