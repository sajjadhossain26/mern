const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name field are required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email field are required"],
        trim: true,
        unique: true
    },
    cell: {
        type: String,
        required: [true, "Cell field are required"],
        trim: true,
        unique: true

    },
    photo: {
        type: String,
        default: 'avatar.jpg'
    }

},{
    timestamps: true
})

module.exports = mongoose.model('Student', studentSchema)