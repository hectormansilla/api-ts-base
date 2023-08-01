import { Auth } from "../interfaces/interface.auth";
import { User } from "../interfaces/interface.user";
import UserModel from "../models/model.user";
import { HandlerEncrypt, handlerVerify } from "../utils/util.bcrypt";

const registerNewUser = async ({ email, password, name }: User) => {
  try {
    const isUserExist = await UserModel.findOne({ email });
    if (isUserExist) throw new Error('USER_ALREADY_EXIST');
    const passHash = await HandlerEncrypt(password);
    const registerNewUser = await UserModel.create({ 
      name, 
      email, 
      password: passHash 
    });
    return registerNewUser;
  } catch (err) {
    throw (err)
  }
};

const loginUser = async ({ email, password }: Auth) => {
  try {
    const isUserExist = await UserModel.findOne({ email });
    if (!isUserExist) throw ('USER_NOT_FOUND');
    const passwordHash = isUserExist.password
    const isCheckPassword = await handlerVerify(password, passwordHash);
    if (!isCheckPassword) {
      throw ('PASSWORD_INCORRECT');
    } else {
      return isUserExist
    }
  } catch (err) {
    throw (err);
  }
  
};

export { registerNewUser, loginUser }