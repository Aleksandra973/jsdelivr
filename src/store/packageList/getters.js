
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
    },
    currentPage: (state) => (currentName) => {
            let currentPackage = state.searchPackage.list.find(x => x.package.name == currentName)
            return {
                maintainers: currentPackage?.package?.maintainers,
                keywords: currentPackage?.package?.keywords,
                links: currentPackage?.package?.links
                //{maintainers, keywords, links} = currentPackage?.package
            }
        }
}
