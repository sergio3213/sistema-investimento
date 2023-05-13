import {
    subtrairSaldo,
    subtrairQuantidadeAcoes,
  } from "../../msc/model/CRUD.update.js";
  
  import { insertAcoes } from "../../msc/model/CRUD.insert.js";
  
export const middlewareComprar = async (req, res) => {
    const resSubtrairSaldo = await subtrairSaldo(
      req.body.data.codCliente,
      req.body.data.valor,
      req.body.data.quantidade,
      req.body.data.codAtivo
    );
    if (resSubtrairSaldo === "Saldo insuficiente") {
      return res.status(412).json({ message: "Você não tem saldo suficiente!" });
    }
  
    const resSubtrairQuantidadeAcoes = await subtrairQuantidadeAcoes(
      req.body.data.nomeAcao,
      req.body.data.quantidade
    );
    
    if(resSubtrairQuantidadeAcoes === "Não tem ações suficientes para comprar"){
      return res.status(412).json({message:"Não tem açoes suficientes disponíveis"})
    }
  
    await insertAcoes(req.body.data.codCliente, req.body.data.nomeAcao, req.body.data.quantidade)
    
    res.status(200).json({ message: "Acão comprada com sucesso" });
  }