const mysql = require('mysql');
const dotenv = require('dotenv').config({ path: '../.env'});

const database = mysql.createConnection ({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

database.connect( function (error) {
    if (error) {
        console.log(error)
    } else {
        console.log('Connected')
    }
});

module.exports = database;