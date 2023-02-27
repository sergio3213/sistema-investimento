import {connection} from "./db/connections.js";
import app from '../app.js'
const PORT = 3000


app.listen(PORT, async()=>{
    console.log(`Executando na porta ${PORT}`);
    /* const [result] = await connection.execute("SELECT 1")
        if (result){
        console.log("funcionou")
    }
 */
})