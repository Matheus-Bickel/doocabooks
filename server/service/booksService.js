const booksData = require('../data/booksData.js');

exports.getBooks = function () {
    return booksData.getBooks();
};