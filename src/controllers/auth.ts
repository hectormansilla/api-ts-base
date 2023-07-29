import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth";
import { handlerHttp } from "../utils/error.handler";

const registerAuth = async ({ body }:Request, res:Response) => {
  try {
    const response = await registerNewUser(body);
    res.send(response);
  } catch (err) {
    handlerHttp(res, 'ERROR_POST_USER', err);
  }

};

const loginAuth = (req:Request, res:Response) => {

};

export { registerAuth, loginAuth };