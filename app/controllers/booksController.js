const req = require('express/lib/request')
const res = require('express/lib/response')
const booksService = require('../service/booksService.js')
const booksData = require('../data/booksData.js')
const { get } = require('express/lib/response')

class booksController {

    booksService = async (req, res) => {

        return await booksService.getBooks

        getBooks.jssn(response)
    }
}

module.exports = new booksController()