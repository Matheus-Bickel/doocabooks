const booksData = require('../data/booksData.js')

exports.getBooks = async function () {
    return await booksData.getBooks()
};

exports.getOneBook = async function () {
    return await booksData.getOneBook()
}