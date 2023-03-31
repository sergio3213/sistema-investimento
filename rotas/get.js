import login from "../msc/controller/get.login.js";
import validaToken from "../auth/verify.token.js";
import enviaInfosUser from "../msc/controller/enviaInfosUser.js";
import express from "express";
import { enviaInfosAtivos } from "../msc/controller/enviaInfosAtivos.js";
const routerGet = express.Router();

routerGet.get("/login", login);

routerGet.get(`/ativos/:codCliente`, validaToken, enviaInfosUser);

routerGet.get(`/ativos`, validaToken, enviaInfosAtivos);

export default routerGet
