const mysql = require('mysql');

const database = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'books'
})

database.connect(function(err) {
    if (err) throw err;
});

module.exports = database;