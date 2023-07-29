import { Car } from '../interfaces/car';
import ItemModel from '../models/item';

const getCars = async () => {
  const responseGetAll = await ItemModel.find({});
  return responseGetAll;
};

const getCar = async (id: string) => {
  const responseGet = await ItemModel.findOne({ _id: id });
  return responseGet;
};

const insertCar = async (item: Car) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};

const updateCar = async (id: string, data: Car) => {
  const responseUpdate = await ItemModel.findOneAndUpdate({ _id: id}, data, { new: true });
  return responseUpdate;
};

const deleteCar = async (id: string) => {
  const responseDelete = await ItemModel.findOneAndRemove({ _id: id });
  if (!responseDelete) throw new Error("NOT_FOUND"); 
  return responseDelete;
};

export { insertCar, getCars, getCar, updateCar, deleteCar };