import Vue from 'vue'
import Vuex from 'vuex'
import packageListModule from './packageList'
import packageFilesModule from './packageFiles'
import alertsModule from './alerts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    packageListModule,
    packageFilesModule,
    alertsModule
  },

  strict: process.env.NODE_ENV === 'development'
})

