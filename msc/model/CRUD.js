import {connection} from '../../src/db/connections.js'

  export async function findAll(){
       const [result] = await connection.execute("SELECT * FROM users")
        return result
    }
   
  export async function findUserByAndPassword(user,password){
    const [[result]] = await connection.execute(`SELECT user FROM users WHERE user='${user}' and pass='${password}'`)
    return result
   }


