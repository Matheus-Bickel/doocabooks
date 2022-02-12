const mysql = require('../../database/db.js')

exports.getBooks = async function () {

    const conn = await connect()
    return await conn.query('SELECT * FROM BOOKS')
}

exports.getOneBook = async function (id) {

    return await mysql.promisse.query('select * from books where id = ${id}')
}

module.exports = connect