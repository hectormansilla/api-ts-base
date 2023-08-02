import { Auth } from "../interfaces/interface.auth";
import { User } from "../interfaces/interface.user";
import UserModel from "../models/model.user";
import { HandlerEncrypt, handlerVerify } from "../utils/util.bcrypt";
import { generateToken } from "../utils/util.jwt";

const registerNewUser = async ({ email, password, name, role, description }: User) => {
  try {
    const isUserExist = await UserModel.findOne({ email });
    if (isUserExist) throw new Error('USER_ALREADY_EXIST');
    const passHash = await HandlerEncrypt(password);
    const registerNewUser = await UserModel.create({ 
      email, 
      password: passHash,
      name, 
      role,
      description,
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
      const token = generateToken(isUserExist.email);
      const userData = {
        user: isUserExist,
        token,
      }
      return userData
    }
  } catch (err) {
    throw (err);
  }
  
};

export { registerNewUser, loginUser }