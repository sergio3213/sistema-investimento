import {connection} from '../../src/db/connections.js'

  export async function findAll(){
       const [result] = await connection.execute("SELECT * FROM users")
        return result
    }
   
  export async function findUserByAndPassword(user,password){
    const [[result]] = await connection.execute(`SELECT * FROM users WHERE user='${user}' and pass='${password}'`)
    return result
   }

   export async function findByCodCliente(codCliente){
    const [result] = await connection.execute(`SELECT codCliente,usersacoes.codAtivo,acoes.valor FROM usersacoes
    INNER JOIN acoes
    ON usersacoes.codAtivo=acoes.codAtivo
    WHERE codCliente=${codCliente}`)
    return result
   }

