const booksData = require('../data/booksData.js')

class BooksService {

    constructor () {
        this.booksService = new BooksService()
    }

    booksService = async function (req, res) {
        return await booksData.getBooks()
    }

}

module.exports = BooksService