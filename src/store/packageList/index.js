import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

const packageListModule = {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}
 export default packageListModule
