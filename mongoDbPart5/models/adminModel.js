const mongoose = require('mongoose');

const adminModel= mongoose.Schema({
    name:{
        type: String,
        required: [true, 'name field are required'],
    },
    email: {
        type: String,
        required: [true, 'Email field is required'],
        unique: true
    },
    cell: {
        type: String,
        required: [true, 'Cell field is required'],
        unique: true
    },
    location: {
        type: String,
        required: false,
        default: "Lohagara"
    },
    username: {
        type: String,
        required: [true, 'Username field is required'],
        unique: true,
        lowercase: true,
        minLength: 5,
        maxLength: 10
    },
    skill: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps: true
})


module.exports=mongoose.model('Admin', adminModel)