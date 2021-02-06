import Vue from 'vue'
import Vuex from 'vuex'
import packageListModule from './packageList'
import packageFilesModule from './packageFiles'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    packageListModule,
    packageFilesModule
  },

  strict: process.env.NODE_ENV === 'development'
})

