const database = require('../../database/db.js')

exports.getBooks = async function () {

    return await database.query('select * from books')
}

exports.getOneBook = async function (id) {

    return await database.query('select * from books where id = ${id}')
}