var _ = require("lodash");

var worker = function(arr) {
  return _.sortBy(arr, el => -el.quantity);
};

// export the worker function as a nodejs module
module.exports = worker;
