function countWords(inputWords) {
    let counts = {};
    return inputWords.reduce(function(prev, value, index, arr){
        // prev[value] = prev[value] !== undefined ? prev[value] + 1 : 1;
        prev[value] = ++prev[value] || 1;
        return prev;
    }, {});
}

module.exports = countWords
