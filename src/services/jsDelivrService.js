import axios from "axios";

export class jsDelivrService {

    static url = 'https://data.jsdelivr.com'

    static async getFiles(currentPackage) {

        let {name, version} = currentPackage
        let response = await axios.get(`${jsDelivrService.url}/v1/package/npm/${name}@${version}`)
        return response.data
    };

    static pathVisitor(parentPath, node, pathList) {
        if (node.files == undefined) {
            pathList.push(`${parentPath}/${node.name}`.substring(10))
            return;
        }
        for (let child of node.files) {
            this.pathVisitor(`${parentPath}/${node.name}`, child, pathList)
        }
    }
}
