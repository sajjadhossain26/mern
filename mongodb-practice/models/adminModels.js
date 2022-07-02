const mongoose = require('mongoose')

const adminModel = mongoose.Schema({
    name:{
        type: String,
        required: [true, "name filed is required"]
    },
    email:{
        type: String,
        required: [true, "Email field is required"],
        unique: true,

    },
    username:{
        type: String,
        required: [true, 'User name is required']
    },
    password:{
        type: String,
        required: true
    }
},{
        timestamps: true
    })



module.exports= mongoose.model('Admin', adminModel)