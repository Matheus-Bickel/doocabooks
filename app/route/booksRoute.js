const express = require('express')
const router  = express.Router()
const BooksData = require('../data/booksData.js')
const BooksService = require('../service/booksService.js')
const booksModel = require('../models/books.js')
const booksController = require('../controllers/booksController.js')

router.get('/books', (req, res) => {
    books = booksController
    res.send(booksController)
})
    
router.get('/books/:id', async function (req, res){
    
})

router.post('/books', async function (req, res){
    
})

router.put('/books/:id', async function (req, res){

})
router.delete('/books/:id', async function (req, res){

})


module.exports = router