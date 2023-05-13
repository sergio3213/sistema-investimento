import login from "../msc/controller/get.login.js";
import validaToken from "../auth/verify.token.js";
import enviaInfosUser from "../msc/controller/enviaInfosUser.js";
import express from "express";
import { enviaInfosAtivos } from "../msc/controller/enviaInfosAtivos.js";
import  enviaSaldoFromCodCliente from "../msc/controller/buscaSaldoCliente.js"

const routerGet = express.Router();

routerGet.get("/login", login);

routerGet.get(`/ativos/:codCliente`, validaToken, enviaInfosUser);

routerGet.get(`/ativos`, validaToken, enviaInfosAtivos);

routerGet.get(`/conta/:codCliente`,validaToken, enviaSaldoFromCodCliente);
export default routerGet
