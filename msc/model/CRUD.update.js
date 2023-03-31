import { connection } from "../../src/db/connections.js";

export async function subtrairSaldo(codCliente, valor) {
  const [[objSaldo]] = await connection.execute(
    `SELECT saldo FROM users WHERE codCliente = ${codCliente}`
  );

  if (valor > objSaldo.saldo) {
    return "Saldo insuficiente";
  }
  await connection.execute(
    `UPDATE users SET saldo = (saldo-${valor}) WHERE codCliente = ${codCliente}  `
  );
  return "Saldo atualizado com sucesso";
}

export async function adicionarSaldo(codCliente, valor) {
    await connection.execute(
    `UPDATE users SET saldo = (saldo+${valor}) WHERE codCliente = ${codCliente}  `
  );
  return "Saldo atualizado com sucesso";
}


export async function subtrairQuantidadeAcoes(nomeAcao, quantidade) {
  const [[objQuantidade]] = await connection.execute(
    `SELECT quantidade FROM acoes WHERE nome = '${nomeAcao}'`
  );
  if (quantidade > objQuantidade.quantidade) {
    return "Não tem ações suficientes para comprar";
  }

  await connection.execute(
    `UPDATE acoes SET quantidade = (quantidade-${quantidade}) WHERE nome = '${nomeAcao}'  `
  );
  return "Quantidade atualizada com sucesso";
}

export async function adicionarQuantidadeAcoes(codCliente,codAtivo, quantidade) {
  const [usersAcoesSelect] = await connection.execute(
    `SELECT * FROM usersacoes WHERE codCliente = ${codCliente} AND codAtivo = ${codAtivo}`
  );
  if(usersAcoesSelect.length>=1){
    await connection.execute(
      `UPDATE acoes SET quantidade = (quantidade+${quantidade}) WHERE codAtivo = ${codAtivo}  `
    );
    return "Quantidade atualizada com sucesso";  
  }
  
   
}
