import { adicionarSaldo } from "../model/CRUD.update.js";
import { adicionarQuantidadeAcoes } from "../model/CRUD.update.js";
import { deleteUsersacoes } from "../model/CRUD.delete.js";

export async function middlewareVender(req, res) {
  const resAdicionarSaldo = await adicionarSaldo(
    req.body.data.codCliente,
    req.body.data.valor
  );

  await adicionarQuantidadeAcoes(
    req.body.data.codCliente,
    req.body.data.codAtivo,
    req.body.data.quantidade
  );

  await deleteUsersacoes(
    req.body.data.codCliente,
    req.body.data.codAtivo,
    req.body.data.quantidade
  );
}
