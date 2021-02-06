import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

const packageFilesModule = {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}
 export default packageFilesModule
