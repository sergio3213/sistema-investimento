import login from "../msc/controller/get.login.js";
import validaToken from "../auth/verify.token.js";

import express from "express";

const routerGet = express.Router();

routerGet.get("/login", login);

routerGet.get("/login2", validaToken);

export default routerGet;
