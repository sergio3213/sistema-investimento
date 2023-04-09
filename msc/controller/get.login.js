import jwt from "jsonwebtoken";
import {findAll, findUserByAndPassword} from "../model/CRUD.select.js";

const secretToken = "mypass";

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

export default async function login(req, res, next) {
  
  console.log("teste")
  
  const { user, password } = req.query;

  if(await findUserByAndPassword(req.query.user,req.query.password)===undefined){
    return res.status(401).json({message:"Incorrect login"})
  }  
  const dadosUser = await findUserByAndPassword(req.query.user,req.query.password)
  
  login = {
    codCliente:dadosUser.codCliente,
    user:dadosUser.user,
    password:dadosUser.pass,
    saldo:dadosUser.saldo,
  }
  
  const token = jwt.sign( login , secretToken, jwtConfig);
  
  res.status(200).json({token});
  next();
}


