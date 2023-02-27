import express from "express"
import bodyParser from 'body-parser'
import routerGet from "./rotas/get.js"

import routerPost from "./rotas/post.js"
const app = express();

app.use(bodyParser.json())
app.use(routerGet)
app.use(routerPost)
export default app