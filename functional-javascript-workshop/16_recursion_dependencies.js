function getDependencies(tree) {

    function recursiveCall(dependencies = {}) {
        if (!dependencies) return []
        return Object.keys(dependencies).reduce(
            (result, dependency) => {
                return result.concat(
                    `${dependency}@${dependencies[dependency].version}`,
                    recursiveCall(dependencies[dependency].dependencies) || []
                )
            },
            []
        )
    }
    let dependencies = tree.dependencies ? recursiveCall(tree.dependencies) : []
    let uniqueDependencies = [...new Set(dependencies)]
    return uniqueDependencies.sort()

}

module.exports = getDependencies
