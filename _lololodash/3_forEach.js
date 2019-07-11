var _ = require("lodash");

var worker = function(citiesCollection) {
  let updatedCities = _.forEach(citiesCollection, city => {
    city.size = getSize(city.population);
  });
  return updatedCities;
};

let getSize = population => {
  return population > 1 ? "big" : population > 0.5 ? "med" : "small";
};

// export the worker function as a nodejs module
module.exports = worker;
