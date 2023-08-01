import { Request, Response } from 'express'
import { handlerHttp } from '../utils/util.httpErrors';
import { insertCar, getCars, getCar, updateCar, deleteCar } from '../services/service.item';

const getItems = async (req:Request, res:Response) => {
  try {
    res.send({
      data: 'Esto sólo se puede ver con un JWT válido!',
    });
  } catch (err) {
    handlerHttp(res, 400, 'ORDERS_NOT_FOUND', err);
  }
}

export { getItems }