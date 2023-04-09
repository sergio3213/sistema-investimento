import mysql from "../../node_modules/mysql2/promise.js"
/* const mysql = require('mysql2/promise'); */
export const connection = mysql.createPool({

    host: 'containers-us-west-163.railway.app',
    port: 5771,
    user: 'root',
    password: 'DgGcsV30twptB5OnWbNv',
    database: 'railway',
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})
