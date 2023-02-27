import mysql from "../../node_modules/mysql2/promise.js"
/* const mysql = require('mysql2/promise'); */
export const connection = mysql.createPool({
    host: 'database',
    port: 33070,
    user: 'root',
    password: 'sucesso',
    database: 'trybecashdb',
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})
