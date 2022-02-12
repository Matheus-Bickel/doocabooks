const booksData = require('../data/booksData.js');

exports.getBooks = async function () {
    return await booksData.getBooks();
};