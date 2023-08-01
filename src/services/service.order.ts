import { Car } from '../interfaces/interface.car';
import ItemModel from '../models/model.item';

const getOrders = async () => {
  const responseGetAll = await ItemModel.find({});
  return responseGetAll;
};


export { getOrders };