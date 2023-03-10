import jwt from "jsonwebtoken";
import {findAll, findUserByAndPassword} from "../model/CRUD.js";

const secretToken = "mypass";

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

export default async function login(req, res, next) {
  
  
  
  const { user, password } = req.body;

    
  if(await findUserByAndPassword(req.query.user,req.query.password)===undefined){
    return res.status(401).json({message:"Incorrect login"})
  }  
  const dadosUser = await findUserByAndPassword(req.query.user,req.query.password)
  

  login = {
    tudo:dadosUser, 
    codCliente:dadosUser.codCliente,
    user:dadosUser.user,
    saldo:dadosUser.saldo,
  }
  
  const token = jwt.sign( login , secretToken, jwtConfig);
  console.log("ta funfando")
  
  res.status(200).json({token});
  next();
}


