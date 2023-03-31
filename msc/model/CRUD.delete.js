import { connection } from "../../src/db/connections.js";

export async function deleteUsersacoes(codCliente, codAtivo, quantidade) {
  await connection.execute(
    `DELETE FROM usersacoes WHERE codCliente=${codCliente} AND codAtivo=${codAtivo} LIMIT ${quantidade}`
  );
}
