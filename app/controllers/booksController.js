const req = require('express/lib/request')
const res = require('express/lib/response')
const booksService = require('../service/booksService.js')
const booksData = require('../data/booksData.js')

class booksController {

    booksService = (req, res) => {
        console.log(booksService.getBooks)
    }
    
}

module.exports = booksController