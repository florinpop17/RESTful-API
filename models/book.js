var mongoose = require('mongoose');

// Book Schema
var bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Book = module.exports = mongoose.model('Book', genreSchema);

// Get Genres
module.exports.getGenres = function(callback, limit) {
    Genre.find(callback).limit(limit);
}