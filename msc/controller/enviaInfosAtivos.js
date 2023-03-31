import{findAllAcoes} from '../model/CRUD.select.js'


export async function enviaInfosAtivos(req,res){
    const ativos = await findAllAcoes()
    
    res.status(200).json(ativos);
}