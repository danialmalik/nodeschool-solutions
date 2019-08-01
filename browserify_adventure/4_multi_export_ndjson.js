

module.exports = {
    parse: str=> str.split('\n').map(JSON.parse),
    stringify: arr => arr.map(JSON.stringify).join('\n')
}
