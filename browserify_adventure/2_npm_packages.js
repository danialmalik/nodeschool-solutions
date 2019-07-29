let uniq = require('uniq');
let input = prompt();
let uniqueResults = uniq(input.split(','));
console.log(uniqueResults);
