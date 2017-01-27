var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection();

app.get('/', function(req, res) {
    res.send('Hello World!');
});

