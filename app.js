var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var port = 3000;

var Genre = require('./models/genre');
var Book = require('./models/book');

// Connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get('/api/genres', function(req, res) {
    Genre.getGenres(function(err, genres){
        if(err) { throw err; }
        res.json(genres);
    });
});

app.get('/api/books', function(req, res) {
    Book.getBooks(function(err, books){
        if(err) { throw err; }
        res.json(books);
    });
});

app.listen(port, function(){
    console.log('Server running on port ' + port);
});