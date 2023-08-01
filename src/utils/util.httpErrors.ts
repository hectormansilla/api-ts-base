import { Response } from 'express';

const handlerHttp = (res:Response, statusCode: number, err: string, errRaw?: any) => {
  console.log('Error ' + statusCode + ': ' + err + ' - Description: ' + errRaw);
  res.status(statusCode).send({ 
    'Error': err,
    'Description': errRaw});  
};

export { handlerHttp };