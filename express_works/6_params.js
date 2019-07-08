const express = require("express");
const crypto = require("crypto");

const app = express();

app.put("/message/:id", function(req, res) {
  const data = crypto
    .createHash('sha1')
    .update(new Date().toDateString() + req.params.id)
    .digest('hex');

    res.send(data);
});

app.listen(process.argv[2]);
