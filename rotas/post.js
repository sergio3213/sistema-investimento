import express from "express";
import validaToken from "../auth/verify.token.js";
import { middlewareComprar } from "../msc/controller/post.comprar.js";
import { middlewareVender } from "../msc/controller/post.vender.js";

const routerPost = express.Router();

routerPost.post("/investimentos/comprar", validaToken, middlewareComprar);
routerPost.post("/investimentos/vender", validaToken, middlewareVender)
export default routerPost;
