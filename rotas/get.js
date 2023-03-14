import login from "../msc/controller/get.login.js";
import validaToken from "../auth/verify.token.js";
import enviaInfosUser from "../msc/controller/enviaInfosUser.js";
import express from "express";

const routerGet = express.Router();

routerGet.get("/login", login);

routerGet.get(`/ativos/:codCliente`, validaToken, enviaInfosUser);

export default routerGet
