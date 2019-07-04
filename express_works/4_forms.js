const express = require('express');
const bodyparser = require('body-parser');


const app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req, res){
    let inputStr = req.body.str;
    res.send(reverse(inputStr));
})

function reverse(input){
    return input.split('').reverse().join('');
}

app.listen(process.argv[2]);
