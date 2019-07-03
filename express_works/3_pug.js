const express = require('express');
const app = express();


TEMPLATES_PATH = process.argv[3] || path.join(__dirname, 'templates');


app.set('views', TEMPLATES_PATH);
app.set('view engine', 'pug');



app.get('/home', function (req, res) {
    res.render('index', { date: new Date().toDateString() });
})

app.listen(process.argv[2]);
