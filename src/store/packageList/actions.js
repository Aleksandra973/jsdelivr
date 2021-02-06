import {npmService} from "../../services/npmService"

export default {
   async searchPackage({commit}, searchModel){
        try {
           let response = await npmService.searchPackage(searchModel)
            commit ('setPackage', response)
        } catch (error) {
            console.log(error)
        }
    }
}
