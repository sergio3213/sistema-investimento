import { connection } from "../../src/db/connections.js";

export async function subtrairSaldo(codCliente, valor,quantidade,codAtivo) {
  const [[objSaldo]] = await connection.execute(
    `SELECT saldo FROM users WHERE codCliente = ${codCliente}`
  );
  const [[objQuantidade]] = await connection.execute(
    `SELECT quantidade FROM acoes WHERE codAtivo = ${codAtivo}`
  );
  
  console.log('aaaa',objQuantidade.quantidade)

  if (valor > objSaldo.saldo) {
    return "Saldo insuficiente";
  }

  if (objQuantidade.quantidade<quantidade){
    return "Não tem açoes suficientes disponíveis para comprar!"
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

export async function adicionarQuantidadeAcoes(
  codCliente,
  codAtivo,
  quantidade
) {
  const [usersAcoesSelect] = await connection.execute(
    `SELECT * FROM usersacoes WHERE codCliente = ${codCliente} AND codAtivo = ${codAtivo}`
  );
  if (usersAcoesSelect.length >= 1) {
    await connection.execute(
      `UPDATE acoes SET quantidade = (quantidade+${quantidade}) WHERE codAtivo = ${codAtivo}  `
    );
    return "Quantidade atualizada com sucesso";
  }
}

export async function depositar(codCliente, valor) {
  if(valor<=0){
    return "Insira um valor maior que 0!"
  }
  await connection.execute(
    `UPDATE users SET saldo = (saldo+${valor}) WHERE codCliente = ${codCliente} `
  );
}

export async function sacar(codCliente, valor) {
 const [[saldoCliente]] = await connection.execute(
    `SELECT saldo FROM users WHERE codCliente = ${codCliente}`
  );
  if(valor<=0){
    return "Insira um valor maior que 0!"
  }
  if(valor>saldoCliente.saldo){
    return "Você não tem saldo suficiente para sacar"
  }
  await connection.execute(
    `UPDATE users SET saldo = (saldo-${valor}) WHERE codCliente = ${codCliente} `
  );
}
