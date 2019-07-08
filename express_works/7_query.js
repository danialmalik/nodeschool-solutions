const express = require('express');
const app = express();

app.get('/search', function (req, res) {
    // const respData = JSON.stringify(req.query);
    const respData = req.query;
    res.send(respData);
})
app.listen(process.argv[2]);
