import * as dotenv from 'dotenv'
dotenv.config()

import {connection} from "./db/connections.js";

import app from '../app.js'


app.listen(3000,'0.0.0.0', async()=>{
    console.log(`Escutando na porta ${process.env.PORT}`);
     const [result] = await connection.execute("SELECT 1")
        if (result){
        console.log("bd funcionando")
    }
})