import jwt from "jsonwebtoken";
import { findAll, findUserByAndPassword } from "../model/CRUD.js";

const secretToken = "mypass";

const jwtConfig = {
  expiresIn: "7d",
  algorithm: "HS256",
};

export default async function login(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );

  const { user, password } = req.body;

  if (
    (await findUserByAndPassword(req.query.user, req.query.password)) ===
    undefined
  ) {
    return res.status(401).json({ message: "Incorrect login" });
  }

  login = {
    user,
    password,
  };

  const token = jwt.sign(login, secretToken, jwtConfig);
  console.log("ta funfando");

  res.status(200).json({ token });
  next();
}
