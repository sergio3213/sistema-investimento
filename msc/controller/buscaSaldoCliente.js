import {findSaldoFromCodUser} from '../model/CRUD.select.js';

export default async function enviaSaldoFromCodCliente(req,res){
    const saldoPorCodCliente = await findSaldoFromCodUser(req.params.codCliente)
    res.status(200).json(saldoPorCodCliente)
}   