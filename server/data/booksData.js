const database = require('../../database/db.js');

exports.getBooks = function () {
    return database.query('select * from books');
};