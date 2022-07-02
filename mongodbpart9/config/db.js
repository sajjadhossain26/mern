const mongoose = require('mongoose');


const connectMongoDB =async () =>{
  try{
   await mongoose.connect(process.env.MONGO_CONNECT)
   console.log(`MongoDB is ready`.bgGreen.black);
  }catch(error){
   console.log(`${error}`.bgRed.black);
  }
}

module.exports = connectMongoDB;