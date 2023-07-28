import { connect } from 'mongoose';

const dbConnect = async() => {
  console.log(process.env.DB_URI);
  
  const DB_URI = <string>process.env.DB_URI;
  await connect(DB_URI);
} 

export default dbConnect;