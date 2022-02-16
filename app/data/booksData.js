const { send } = require('express/lib/response')
const mysql = require('../../database/db.js')

getBooks = async function (req, res) {

    mysql.getConnection((error, conn) => {
    if (error) { return res.status(500),send({ error: error})}

    conn.query(
        'SELECT * FROM BOOKS;',
        (error, result, fields) => {
            if (error) {return res.status(500).send({ error: error})}

            const response = {
                books: result.map(book => {
                    return {
                        id: book.id,
                        title: book.title,
                        author: book.author,
                        num_pages: book.num_pages,
                        preview: book.preview,
                        quantity: book.quantity,
                        avaible: book.avaible,
                        request: {
                            type:'GET',
                            description: 'Return all books',
                            url:  'http://localhost:3000/books' + books.id
                        }
                    }
                })
            }
        })
    })
}

module.exports = getBooks