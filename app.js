var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

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

app.post('/api/genres', function(req, res) {
    var genre = req.body;
    
    Genre.addGenre(genre, function(err, genre){
        if(err) { throw err; }
        res.json(genre);
    });
});

app.put('/api/genres/:_id', function(req, res) {
    var id = req.params._id;
    var genre = req.body;
    
    Genre.updateGenre(id, genre, {},function(err, genre){
        if(err) { throw err; }
        res.json(genre);
    });
});

app.delete('/api/genres/:_id', function(req, res) {
    var id = req.params._id;
    
    Genre.removeGenre(id, function(err, genre){
        if(err) { throw err; }
        res.json(genre);
    });
});

app.get('/api/books', function(req, res) {
    Book.getBooks(function(err, books){
        if(err) { throw err; }
        res.json(books);
    });
});

app.post('/api/books', function(req, res) {
    var book = req.body;
    
    Book.addBook(book, function(err, book){
        if(err) { throw err; }
        res.json(book);
    });
});

app.get('/api/books/:_id', function(req, res) {
    var id = req.params._id;
    
    Book.getBookById(id, function(err, book){
        if(err) { throw err; }
        res.json(book);
    });
});

app.put('/api/books/:_id', function(req, res) {
    var id = req.params._id;
    var book = req.body;
    
    Book.updateBook(id, book, {},function(err, book){
        if(err) { throw err; }
        res.json(book);
    });
});

app.listen(port, function(){
    console.log('Server running on port ' + port);
});