import axios from "axios";

export class npmService {

    static url = 'https://registry.npmjs.org'

    static async searchPackage(searchModel) {
        let {searchString, page, itemsPerPage} = searchModel
        let offset = page * itemsPerPage - itemsPerPage
        let response = await axios.get(`${npmService.url}/-/v1/search`, {
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
    }
}
