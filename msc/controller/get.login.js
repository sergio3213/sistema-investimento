import jwt from "jsonwebtoken";
import {findUserByAndPassword} from "../model/CRUD.js";

const secretToken = "mypass";

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

export default async function login(req, res, next) {
  
  console.log("testandooo")
  const { user, password } = req.body;
  
  if(await findUserByAndPassword(req.body.user,req.body.password)===undefined){
    return res.status(401).json({message:"Incorrect login"})
  }
  

  login = {
    user,
    password
  }
  
  const token = jwt.sign( login , secretToken, jwtConfig);
  console.log("ta funfando")
  
  res.status(200).json({token});
  next();
}


