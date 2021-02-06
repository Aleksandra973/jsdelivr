<template>
  <v-app>
    <v-container>

      <v-main>
        <PackageList/>
      </v-main>

    </v-container>


    <v-footer>

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
