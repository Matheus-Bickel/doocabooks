const database = require('../../database/db.js');

exports.getBooks = async function () {

    try {

        let response = await database.query('select * from books')

    } catch (error) {
        console.log(error)
    }
};