import {npmService} from "../../services/npmService"

export default {
   async searchPackage({commit}, searchPackage, page, itemsPerPage){
        try {
           let response = await npmService.searchPackage(searchPackage, page, itemsPerPage)
            commit ('setPackage', response)
        } catch (error) {
            console.log(error)
        }
    }
}
