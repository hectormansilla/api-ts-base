import { Schema, model } from 'mongoose';
import { User } from '../interfaces/user';

const UserSchema = new Schema<User>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },    
    description: {
      type: String,
      default: 'Usuario de la App',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = model('users', UserSchema);

export default UserModel