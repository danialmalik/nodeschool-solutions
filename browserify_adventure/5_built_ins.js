const url = require('url');
const querystring = require('querystring');

let webAddr = prompt();

let parsedUrl = url.parse(webAddr);
let parsedQuery = querystring.parse(parsedUrl.query);

console.log(url.resolve(webAddr, parsedQuery.file));
