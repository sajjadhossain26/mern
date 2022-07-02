const jwt = require('jsonwebtoken');
const admin = require('../models/adminModel');

const authCheck = async(req, res, next)=>{

  if(req.headers.authorization){

      const token = req.headers.authorization.split(' ')[1]; 

      const token_verify = jwt.verify(token, process.env.JWT_SECRET);
// get login user
      req.user=await admin.findById(token_verify.id)

      next()

  }else{

    res.json({
        message: "token not found"
    })

  }



}

module.exports= {
    authCheck
}