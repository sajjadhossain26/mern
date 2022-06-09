const mongoose = require('mongoose');

const connectMongoDB= async ()=>{
  
  try{
    let connect = await mongoose.connect('mongodb+srv://sajjad:sajjadhossain@ourtestingcluster.bvffkve.mongodb.net/first-express?retryWrites=true&w=majority')
    console.log(`mongoDB connection successful prot: ${connect.connection.host}`.green)
  }catch(error){
   console.log(`${error}`.red)
  }
}

module.exports=connectMongoDB;