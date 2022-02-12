//const dotenv = require('dotenv').config({ path: '../.env'});

/*const database = mysql.createConnection ({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})*/

async function connect () {
    
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection ({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'books'
    })

    console.log('Connected')

    global.connection = connection
    return connection
}

connect()


module.exports = connect;