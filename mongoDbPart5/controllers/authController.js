const admin = require('../models/adminModel')
const bcrypt= require('bcryptjs')
const jwt = require('jsonwebtoken')

const adminLogin=async(req, res)=>{
  const {email, password}=req.body

  let data = await admin.findOne({email})
  if(!data){

    res.status(400).json({
     message: "Email not found"
  })

  }else{
    
    if(await(bcrypt.compare(password, data.password) )){
      
     const token= jwt.sign({id: data._id}, process.env.JWT_SECRET,{
        expiresIn: "1d"
      })

       res.status(200).json({
        id: data._id,
        name: data.name,
        email: data.email,
        cell: data.cell,
        token: token

       })


    }else{
       res.status(400).json({
       message: "Password not match"
  })
    }
  
  }
  
}

module.exports={
    adminLogin
}