const booksData = require('../data/booksData.js')

class BooksService {

    getBooks = async function () {
        return await booksData.getBooks()
    }

}