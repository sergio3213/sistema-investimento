import { findByCodCliente } from "../model/CRUD.js"
export default async function enviaInfosUser(req,res){
    console.log(req.params.codCliente)

    const acoesPorUser = await findByCodCliente(req.params.codCliente)
    res.status(200).json(acoesPorUser)
}