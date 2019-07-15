
// include the Lo-Dash library
var _ = require('lodash')

var worker = function(towns) {
  let results = {hot:[], warm:[]};
  let checkTownTempType = temperature => temperature > 19;
  _.forEach(towns, (town, townName)=>{
    if(_.every(town, checkTownTempType)){
        results.hot.push(townName);
    } else if (_.some(town, checkTownTempType)){
        results.warm.push(townName);
    }
  })
  return results;
}


module.exports = worker
