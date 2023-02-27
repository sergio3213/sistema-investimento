import express from 'express'
const routerPost = express.Router();

routerPost.post("/investimentos/comprar", (req, res) => {
  res.status(200).json({ message: "post" });
});
export default routerPost;
