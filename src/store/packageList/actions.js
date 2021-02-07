import {npmService} from "../../services/npmService"

export default {
    async searchPackage({commit}, searchModel) {
        let response = await npmService.searchPackage(searchModel)
        commit('setPackage', response)
    }
}
