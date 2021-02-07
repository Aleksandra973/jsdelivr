import {jsDelivrService} from "../../services/jsDelivrService"

export default {
    async getFiles({commit}, currentPackage) {
        let response = await jsDelivrService.getFiles(currentPackage)
        let pathList = []
        jsDelivrService.pathVisitor('', response, pathList)
        commit('setFiles', pathList)

    }
}
