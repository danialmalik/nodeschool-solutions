// include the Lo-Dash library
var _ = require("lodash");

var worker = function (words) {
    return _.chain(words)
        .map(word => word + 'chained')
        .map(word=> word.toUpperCase())
        .sort()
};

// export the worker function as a nodejs module
module.exports = worker;
