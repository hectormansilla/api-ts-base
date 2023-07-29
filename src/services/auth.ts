import { User } from "../interfaces/user";
import UserModel from "../models/user";

const registerNewUser = async ({ email, password, name }: User) => {
  const isUserExist = await UserModel.findOne({ email });
  if (isUserExist) {
    throw new Error("ALREADY_EXIST_USER");
  } 
  const registerNewUser = await UserModel.create({ name, email, password });
  return registerNewUser;
};

const loginUser = () => {

};

export { registerNewUser, loginUser }