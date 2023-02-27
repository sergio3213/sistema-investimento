import * as dotenv from 'dotenv'
dotenv.config()

import {connection} from "./db/connections.js";

import app from '../app.js'


app.listen(process.env.PORT, async()=>{
    console.log(`Executando na porta ${process.env.PORT}`);
    /* const [result] = await connection.execute("SELECT 1")
        if (result){
        console.log("funcionou")
    }
 */
})