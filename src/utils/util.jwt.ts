import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || 'PanConChancho';

const generateToken = (id:string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: '1h',
  });
  return jwt
};

const verifyToken = async (jwt:string) => {
  const isJwtOk = verify(jwt, JWT_SECRET);
  return isJwtOk;
};

export { generateToken, verifyToken };