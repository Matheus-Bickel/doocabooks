const express = require('express');
const router  = express.Router();
const booksService = require('../service/booksService.js')

router.get('/', async function (req, res) {
    res.send('teste')
});

router.post('/books', async function (req, res){
    
});

router.get('/books', async function (req, res){
    
    try {

        const books = await booksService.getBooks();
        //res.json(books);

        console.log(books)

    } catch (error) {
        console.log(error)
    }

});

router.get('/books/:id', async function (req, res){

});

router.put('/books/:id', async function (req, res){

});

router.delete('/books/:id', async function (req, res){

});


module.exports = router;