const database = require('../../database/db.js')

exports.getBooks = async function () {

    return await database.query('select * from books')
}