// scenario.js
var fs = require("fs");

var peach = function (obj) {
    console.trace('traced');
    console.log(obj);
};

var bowser = function (callback) {
  fs.readFile(process.argv[2], {encoding : "utf8"}, callback);
};

var koopa = function (error, file) {
  if(error) {
      console.error(error);
      return;
  }

  peach(JSON.parse(file));
};

bowser(koopa);
