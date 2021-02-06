
export default {
    searchPackage (state) {
        return {
            total: state.searchPackage.total,
            list: state.searchPackage.list.map(x => ({
                name: x.package?.name,
                version: x.package?.version,
                description: x.package?.description,
                author: x.package?.author?.name,
                keywords: x.package?.keywords?.slice(0,3).join(', ')
            }))

        }
    }
}
