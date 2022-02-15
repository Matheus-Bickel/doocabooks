const express = require('express');
const app = express();
const port = 3000;

app.use('/books', require('./route/booksRoute'))

app.listen(port, function () {
    try {
        
        console.log('Server is running')
    } catch (error) {

        console.log(error)
    }
});