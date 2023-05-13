import mysql from "../../node_modules/mysql2/promise.js"
/* const mysql = require('mysql2/promise'); */
export const connection = mysql.createPool({

    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '$ENHAfraca12',
    database: 'db_investimentos',
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})
