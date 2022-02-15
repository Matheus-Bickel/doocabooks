const mysql = require('../../database/db.js')

exports.getBooks = async function () {

    return mysql.query('SELECT * FROM BOOKS')
}

exports.getOneBook = async function (id) {
    
}