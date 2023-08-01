import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/service.auth";
import { handlerHttp } from "../utils/util.httpErrors";

const registerAuth = async ({ body }:Request, res:Response) => {
  let statusCode = 500;
  try {
    const response = await registerNewUser(body);
    res.send(response);
  } catch (err) {
    if (err === 'USER_ALREADY_EXIST') statusCode = 409;
    handlerHttp(res, statusCode, 'ERROR_POST_USER', err);
  }

};

const loginAuth = async ({ body }:Request, res:Response) => {
  const { email, password } = body;
  let statusCode = 500;
  try {
    const response = await loginUser({ email, password });
    res.send(response);
  } catch (err) {
    if (err === 'USER_NOT_FOUND') statusCode = 404;
    if (err === 'PASSWORD_INCORRECT') statusCode = 403;
    handlerHttp(res, statusCode, 'ERROR_POST_USER', err);
  }
};

export { registerAuth, loginAuth };