const express = require("express");
const fs = require("fs");

const app = express();

app.get("/books", function(req, res) {
  const filename = process.argv[3];
  // const content = fs.readFileSync(filename);
  // res.send(JSON.parse(content));
  fs.readFile(filename, (error, data) => {
    if (error) res.send(500);
    try{
        content = JSON.parse(data);
        res.send(content);
    } catch(err) {
        res.send(500);
    };
  });
});

app.listen(process.argv[2]);
