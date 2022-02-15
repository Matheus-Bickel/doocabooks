const express = require('express');
const router  = express.Router();
const BooksService = require('../service/booksService.js')
const books = require('../models/books.js')
const booksController = require('../controllers/booksController.js')

const booksController = new BooksService()

router.get('/books', (req, res) => {
    
    booksController.BooksService(req, res)
})
    


router.get('/books/:id', async function (req, res){
    return json(books)
})

router.post('/books', async function (req, res){
    
})

router.put('/books/:id', async function (req, res){

})

router.delete('/books/:id', async function (req, res){

})


module.exports = router