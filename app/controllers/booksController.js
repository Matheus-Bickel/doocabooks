const req = require('express/lib/request')
const BooksService = require('../service/booksService.js')
const BooksData = require('../data/booksData.js')

class booksController {

    constructor() {
        this.booksService = new BooksService()
    }

    async getBooks (req, res) {
        return await booksData.getBooks()
    };

}
