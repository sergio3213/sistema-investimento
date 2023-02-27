import jwt from "jsonwebtoken";
import {findAll, findUserByAndPassword} from "../msc/model/CRUD.js";

const secretToken = "mypass";

async function validaToken(req, res, next) {
  const token = await req.header("Authorization");
  try {
    const decoded = jwt.verify(token, secretToken);

    const { user, password } = decoded;

    const findUser = await crud.findUserByAndPassword(user, password);

    if (findUser === undefined) {
      return res.status(401).json({ message: "Invalid token" });
    }

    return res.status(200).json({ message: "Valid token" });
  } catch (err) {
    console.log(err);
  }

  next();
}
export default validaToken;