import express from 'express'
import validaToken from "../auth/verify.token.js";
const routerPost = express.Router();

routerPost.post("/investimentos/comprar",validaToken, (req, res) => {
  console.log("chegou")
  res.status(200).json({ message: "funcionou com sucesso" });
});
export default routerPost;
