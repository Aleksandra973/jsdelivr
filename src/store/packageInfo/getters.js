
export default {
    searchPackage (state) {
        return {
            total: state.searchPackage.total,
            list: state.searchPackage.list.map(x => ({
                name: x.package?.name,
                version: x.package?.version,
                description: x.package?.description,
                author: x.package?.author?.name,
                keywords: x.package?.keywords?.slice(0,5).join()
            }))

        }
    }
}

function pathVisitor(parentpath, node) {

    if (node.files == undefined) {
        console.log(`${parentpath}/${node.name}`.substring(10))
        return;
    }
    for(let child of node.files) {
        pathVisitor(`${parentpath}/${node.name}`, child)
    }
}
