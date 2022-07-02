const mongoose = require('mongoose');

const connectMongoDB=async () =>{
  try{
    let connect = await mongoose.connect(process.env.CONNECT);
    console.log(`MongoDB connection successful on port ${connect.connection.host}`.bgBlue.black);
  }catch(error){
    console.log(error);
  }
}

module.exports = connectMongoDB;