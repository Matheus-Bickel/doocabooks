const mysql = require('../../database/db.js')

exports.getBooks = async function () {

    return await mysql.query('SELECT * FROM BOOKS')
}

exports.getOneBook = async function (id) {

    return await mysql.query('select * from books where id = ${id}')
}