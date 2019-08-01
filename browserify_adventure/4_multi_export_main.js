var jsonUtil = require('./4_multi_export_ndjson');


let inputStr = prompt();
let inputArr = prompt();

console.log(jsonUtil.parse(inputStr));
console.log(jsonUtil.stringify(inputArr));
