import {depositar} from '../model/CRUD.update.js'

export default async function middlewareDeposita(req,res){
    console.log(req.body)
    const retornoDoDepositar = await depositar(req.body.codCliente,req.body.valor)
    if(retornoDoDepositar === "Insira um valor maior que 0!"){
        res.status(400).json({message:retornoDoDepositar})
    }
    else{res.status(200).json({message:"Saldo atualizado com sucesso!"})
}
}