const booksData = require('../data/booksData.js')

class BooksService {

    constructor () {

    }

    booksService = async function (req, res) {
        return await booksData.getBooks()
        
        getBooks.json(response)
    }

}

module.exports = new BooksService()