
const admin= require('../models/adminModel')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')

// get all admin
const getAllAdmin= asyncHandler(async(req, res)=>{
  let data=await admin.find()
  res.status(200).json(data)
})

// get single admin
const getSingleAdmin= asyncHandler(async (req, res)=>{
  let data= await admin.findById(req.params.id)
  res.status(200).json(data)
})

// Update admin
const updateAdmin= asyncHandler(async (req, res)=>{
  let update_data= await admin.findById(req.params.id);
  if(!update_data){
  res.status(400).json({
      message: "data not found"
  })
  }else{
    await admin.findByIdAndUpdate(req.params.id,req.body,{
    new: true
  })

  res.status(200).json({
      message: "Update admin data successful"
  })
  }
  
})

// delete admin
const deleteAdmin= asyncHandler(async (req, res)=>{
  let delete_data= await admin.findById(req.params.id);
  if(!delete_data){
    res.status(400).json({
      message: "data not found"
    })
  }else{
    let data= await admin.findByIdAndDelete(req.params.id)
      res.status(200).json({
      message: `${data.name} data deleted successful`
  })
  }
  
})

// create admin
const createAdmin=asyncHandler(async (req, res)=>{
  const {name, email, cell, skill, username, password, location}=req.body;
//   create hash password
   const salt=await bcrypt.genSalt(10);
   const hashPass= await bcrypt.hash(password, salt)

   if(!name || !email || !password || !username || !cell){
       res.status(400).json({
      message: "All fields are required!"
  })
   }else{
       await admin.create({
      ...req.body,
      password: hashPass
  })
  res.status(200).json({
      message: "Create admin successful"
  })
   }
}
)
// admin profile page

const adminProfile=(req, res)=>{
 res.json(req.user)
}

// admin post page

const adminPost=(req, res)=>{
 res.json(req.user)
}

module.exports={
    getAllAdmin,
    getSingleAdmin,
    updateAdmin,
    deleteAdmin,
    createAdmin,
    adminProfile,
    adminPost
}