import jwt from "jsonwebtoken";
import { findAll, findUserByAndPassword } from "../msc/model/CRUD.select.js";

const secretToken = "mypass";

async function validaToken(req, res, next) {
  const token = await req.header("Authorization");

  try {
    const decoded = jwt.verify(token, secretToken);

    const { user, password } = decoded;

    const findUser = await findUserByAndPassword(user, password);

    if (findUser === undefined) {
      return res.status(401).json({ message: "Invalid token" });
    }
  } catch (err) {}

  next();
}
export default validaToken;
