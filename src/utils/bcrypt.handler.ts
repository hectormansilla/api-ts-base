import { compare, hash } from "bcryptjs";


const HandlerEncrypt = async (pass:string)=>  {
  const passwordHash = await hash(pass, 8);
  return passwordHash;
};

const handlerVerify = async (pass:string, passHash: string)=>  {
  const isCheckedPass = await compare(pass, passHash);
  return isCheckedPass
};

export { HandlerEncrypt, handlerVerify };