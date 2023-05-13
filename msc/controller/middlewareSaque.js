import { sacar } from "../model/CRUD.update.js";

export default async function middlewareSaque(req, res) {
    const valorFuncaoSacar = await sacar(req.body.codCliente, req.body.valor)
    if(valorFuncaoSacar === "Insira um valor maior que 0!"){
        res.status(400).json({message: valorFuncaoSacar})    
    }

    if(valorFuncaoSacar === "Você não tem saldo suficiente para sacar"){
        res.status(400).json({message: valorFuncaoSacar})    
    }

    res.status(200).json({message:"Saque efetuado com sucesso!"})
}
