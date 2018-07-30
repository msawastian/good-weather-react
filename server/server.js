require('./config/config.js');

const express = require('express');
const app = express();
const port = process.env.PORT;


app.use(express.static(__dirname + './../'));
app.listen(port);