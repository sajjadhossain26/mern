const mongoose = require('mongoose');

const connectMongoDB= async ()=>{
  
  try{
    let connect = await mongoose.connect(process.env.MONGO_DB)
    console.log(`mongoDB connection successful port: ${connect.connection.host}`.bgCyan.black)
  }catch(error){
   console.log(`${error}`.bgRed.black)
  }
}

module.exports=connectMongoDB;