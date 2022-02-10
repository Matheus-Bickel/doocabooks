const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config({path: './.env'});

const database = mysql.createConnection ({})

database.connect(function(err) {
    if (err) throw err;
});

module.exports = database;