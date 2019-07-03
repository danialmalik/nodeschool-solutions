const express = require('express');
const path = require('path');


STATIC_ASSETS_DIR = process.argv[3] || path.join(__dirname, 'public');


const app = express();

app.use(express.static(STATIC_ASSETS_DIR));
app.listen(process.argv[2]);
