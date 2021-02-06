import axios from "axios";

export class npmService{
    static async searchPackage (searchModel) {
        try{
            let {searchString, page, itemsPerPage} = searchModel
            let offset = page*itemsPerPage - itemsPerPage
            let response = await axios.get('https://registry.npmjs.org/-/v1/search', {
                params: {
                    text: searchString,
                    from: offset,
                    size: itemsPerPage
                }
            })
            let packageList = {
                list: response.data.objects,
                total: response.data.total
            }
            return packageList
        } catch (error) {
            console.log(error)
        }
    }
}
