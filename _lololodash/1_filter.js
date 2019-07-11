var _ = require("lodash");

var worker = function(users) {
    return _.filter(users, {active:true});
};

// export the worker function as a nodejs module
module.exports = worker;
