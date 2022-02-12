const express = require('express');
const router  = express.Router();
const booksService = require('../service/booksService.js')
const books = require('../models/books.js')

router.get('/', async function (req, res) {
    try {
        res.send('teste')

    } catch (error) {
        console.log(error)
    }

});

router.get('/books', async function (req, res){
    
    try {
    
        const books = await booksService.getBooks()
        res.json(books);


    } catch (error) {

        console.log(error)
    }

});

router.get('/books/:id', async function (req, res){
    return books;
});

router.post('/books', async function (req, res){
    
});

router.put('/books/:id', async function (req, res){

});

router.delete('/books/:id', async function (req, res){

});


module.exports = router