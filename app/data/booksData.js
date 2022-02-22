const mysql = require('../../database/db.js')

class BooksData {

    constructor (conn) {
        this.conn = conn
    }

    conn = mysql.query('SELECT * FROM BOOKS', (error, result) => {
        if (error) throw error
        console.log("Result: " + JSON.stringify(result))
    })
   
}

module.exports = new BooksData()