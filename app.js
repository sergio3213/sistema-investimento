import express from "express"
import bodyParser from 'body-parser'
import routerGet from "./rotas/get.js"
import cors from 'cors';
import routerPost from "./rotas/post.js"
const app = express();

app.use(bodyParser.json())
app.use((_req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next()
})
app.use(cors({origin:'*'}))
app.use(routerGet)
app.use(routerPost)

export default app