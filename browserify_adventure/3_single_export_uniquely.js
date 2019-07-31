var uniq = require('uniq');

module.exports = function(list){
    return uniq(list.split(','));
}
