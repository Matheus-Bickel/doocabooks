const database = require('../../database/db.js')

exports.getBooks = async function () {

    let response = await database.query('select * from books')
}