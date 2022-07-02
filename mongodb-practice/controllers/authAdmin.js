const admin = require('../models/adminModels')
const bcrypt = require('bcryptjs')

const loginAdmin =async (req, res)=>{
    const {name, email, username, password}= req.body;
    let data = await admin.findOne({email})
    if(!data){
     res.status(404).json({
        message: "Email not found"
     })
    }else{

        if((await bcrypt.compare(password, data.password))){
           res.status(200).json({
              message: "login success"
           })
        }else{
           res.status(200).json({
            message: "Password not match"
            })
        }

    }
 
}

module.exports = loginAdmin