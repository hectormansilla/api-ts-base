import { Request, Response } from 'express'
import { handlerHttp } from '../utils/error.handler';
import { insertCar, getCars, getCar, updateCar, deleteCar } from '../services/item';

const getItems = async (req:Request, res:Response) => {
  try {
    const response = await getCars();
    res.send(response);
  } catch (err) {
    handlerHttp(res, 404, 'ITEMS_NOT_FOUND', err);
  }
}

const getItem = async ({ params }:Request, res:Response) => {
  try {
    const { id } = params;
    const response = await getCar(id);
    res.send(response);
  } catch (err) {    
    handlerHttp(res, 404, 'ITEM_NOT_FOUND', err);
  }
}


const postItems = async ({ body }:Request, res:Response) => {
  try {
    const response = await insertCar(body);
    res.send(response);
  } catch (err) {
    handlerHttp(res, 422, 'ITEM_UNPROCESSABLE', err);
  }
}

const updateItem = async ({ params, body }:Request, res:Response) => {
  try {
    const { id } = params;
    const response = await updateCar(id, body);
    res.send(response);
  } catch (err) {
    handlerHttp(res, 409, 'ITEM_CONFLICT', err);
  }
}


const deleteItem = async ({ params }:Request, res:Response) => {
  try {
    const { id } = params;
    const response = await deleteCar(id);
    res.send(response);
  } catch (err) {
    handlerHttp(res, 417, 'ITEM_UNPROCESSABLE', err);
  }
}

export { getItem, getItems, updateItem, postItems, deleteItem }