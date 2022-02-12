const booksService = require('../service/booksService.js')

class books {

    constructor(id, title, author, num_pages, preview, quantity, avaible, date) {

        this.id = id
        this.name = title
        this.author = author
        this.num_pages = num_pages
        this.preview = preview
        this.quantity = quantity
        this.avaible = avaible
        this.date = date
    }

    async getBook (id) {
        return await booksService.getOneBook()
    }
};

exports.module = books;