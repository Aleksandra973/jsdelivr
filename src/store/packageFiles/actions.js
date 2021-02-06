import {jsDelivrService} from "../../services/jsDelivrService"

export default {
   async getFiles({commit}, currentPackage){
        try {
           let response = await jsDelivrService.getFiles(currentPackage)
            let pathList = []
           jsDelivrService.pathVisitor('', response, pathList)
            commit ('setFiles', pathList)
        } catch (error) {
            console.log(error)
        }
    }
}
