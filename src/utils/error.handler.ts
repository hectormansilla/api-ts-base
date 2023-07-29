import { Response } from 'express';

const handlerHttp = (res:Response, err: string, errRaw?: any) => {
  console.log(errRaw);
  
  res.status(500);
  res.send({ 
            "error type": err,
            "error descrtiption": errRaw.toString()
          });
};

export { handlerHttp };