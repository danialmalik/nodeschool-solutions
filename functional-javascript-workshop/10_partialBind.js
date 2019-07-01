module.exports = function(namespace) {
    // Create a function with a preset leading argument
    return console.log.bind(console, namespace)
}
