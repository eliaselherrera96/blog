import jwt from "jsonwebtoken";
import { promisify } from "util";
import dotenv from "dotenv";
dotenv.config();

const sign = promisify(jwt.sign);
const verify = promisify(jwt.verify);

const secret = process.env.JWT_SECRET;

async function createToken(payload, options) {
  const token = await sign(payload, secret, options);
  return token;
}

async function validateToken(token) {
  const decoded = await verify(token, secret);
  return decoded;
}

export { createToken, validateToken };
