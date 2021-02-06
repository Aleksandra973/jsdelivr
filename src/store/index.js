import Vue from 'vue'
import Vuex from 'vuex'
import packageListModule from './packageList'
import packageInfoModule from './packageInfo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    packageListModule,
    packageInfoModule
  },

  strict: process.env.NODE_ENV === 'development'
})

