import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/util.jwt";
import { handlerHttp } from "../utils/util.httpErrors";
//import { hasRole } from "../interfaces/interface.role";

const checkJwt = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const jwtHeader = req.headers.authorization || '';
    const jwt = jwtHeader.split(' ').pop()
    const isUserTokenOk = await verifyToken(`${jwt}`);
    if (!isUserTokenOk) throw new Error ('INVALID_TOKEN');
    console.log(req);
    
    //hasRole(isUserTokenOk, ['pro'])
    next();
  } catch (err) {
    handlerHttp(res, 400, 'TOKEN_FAILURE', err);
  }

};

export { checkJwt };