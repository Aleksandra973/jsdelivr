import state from './state'
import mutations from './mutations'
import actions from './actions'

const alertsModule = {
    namespaced: true,
    state,
    mutations,
    actions
}
 export default alertsModule
