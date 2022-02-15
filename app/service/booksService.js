const booksData = require('../data/booksData.js')

class BooksService {

    
    getOneBook = async function () {
        return await booksData.getOneBook()
    }

}