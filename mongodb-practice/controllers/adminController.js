const admin = require('../models/adminModels');
const bcrypt = require('bcryptjs')



// get all admin
const getAllAdmin=async (req, res)=>{
  let data = await admin.find()
  res.status(200).json(data)
}

// get single admin
const getSingleAdmin=async (req, res)=>{
  let data = await admin.findById(req.params.id)
  if(data){
   res.status(200).json(data)
  }else{
    res.status(400).json({
        message: 'data not found'
    })
  }
}

// update admin
const updateAdmin=async (req, res)=>{
  let data = await admin.findById(req.params.id)
  
   if(data){
    await admin.findByIdAndUpdate(req.params.id, req.body ,{
        new: true
    })
    res.status(200).json({
        message: "Data updated"
    })
   }else{
    res.status(400).json({
        message: "data not found"
    })
   }

}


// delete admin
const deleteAdmin =async (req, res)=>{
  let data = await admin.findById(req.params.id)
  if(data){
    await admin.findByIdAndDelete(req.params.id)
    res.status(200).json({
        message: "data deleted"
    })
  }else{
    res.status(400).json({
     message: "data not found"
  })
  }
  
}

// create admin
const createAdmin=async (req, res)=>{
   
    // hash password
    let salt = await bcrypt.genSalt(10);
    let hash_pass= await bcrypt.hash(req.body.password, salt) 
    console.log(hash_pass);

   await admin.create({
    ...req.body,
    password: hash_pass
   })
  res.status(200).json({
    message: 'data created'
  })
}


module.exports={
    getAllAdmin,
    createAdmin,
    updateAdmin,
    getSingleAdmin,
    deleteAdmin,
}