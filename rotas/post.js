import express from "express";
import validaToken from "../auth/verify.token.js";
import { middlewareComprar } from "../msc/controller/post.comprar.js";
import { middlewareVender } from "../msc/controller/post.vender.js";
import middlewareDeposita from "../msc/controller/enviaeDeposita.js";
import middlewareSaque from '../msc/controller/middlewareSaque.js'
const routerPost = express.Router();

routerPost.post("/investimentos/comprar", validaToken, middlewareComprar);
routerPost.post("/investimentos/vender", validaToken, middlewareVender)
routerPost.post(`/conta/deposito`,validaToken, middlewareDeposita);
routerPost.post(`/conta/saque`,validaToken, middlewareSaque);

export default routerPost;
