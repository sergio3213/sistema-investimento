import { findByCodCliente } from "../model/CRUD.select.js"
export default async function enviaInfosUser(req,res){
    const acoesPorUser = await findByCodCliente(req.params.codCliente)
    res.status(200).json(acoesPorUser)
}