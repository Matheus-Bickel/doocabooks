const mysql = require('mysql');
//const dotenv = require('dotenv').config({ path: '../.env'});

const database = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'books'
})

database.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Connected...')
    }
});

module.exports = database;