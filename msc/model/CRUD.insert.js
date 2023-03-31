import { connection } from "../../src/db/connections.js";

export async function insertAcoes(codCliente, nomeAtivo, quantidade) {
  const [[objCodAtivo]] = await connection.execute(
    `SELECT codAtivo FROM acoes WHERE nome='${nomeAtivo}'`
  );
  const codAtivo = objCodAtivo.codAtivo;
  for (let cont = 0; cont < quantidade; cont += 1) {
    await connection.execute(`INSERT INTO usersacoes(codCliente, codAtivo) VALUES(${codCliente},${codAtivo})`)
  }
}
