const fs = require('fs');
// const { rewriter } = require('json-server');
const path = require('path');
const Student = require('../models/studentModel')

const students= JSON.parse(fs.readFileSync(path.join(__dirname, '../data/students.json')))

// get id
const getlatestId=()=>{
    if(students.length>0){
       return students[students.length-1].id+1 
    }else{
        return 1
    }
    
}
// get all student
const getAllStudents= async(req, res)=>{
    let data = await Student.find();
   res.status(200).json(data)

}
// get single student
const getSingleStudent=async(req, res)=>{
 let id = req.params.id;
 let data =await Student.findById(id);
 res.status(200).json(data)
}

// create new student
const createStudent=async(req, res)=>{
   let data = await Student.create({
       name: req.body.name,
       age: req.body.age,
       skill: req.body.skill
   });
 res.status(201).json({
   message: "student data created successfull"
 })
    
}
// edit student data
const updateStudent= async(req, res)=>{
    let id = req.params.id;
    await Student.findByIdAndUpdate(id,req.body,{
        new: true
    }) 
     res.status(200).json({
       message: "student data Updated successful"
   })   
}

// delete student data
const deleteStudent=async(req, res)=>{
    let id = req.params.id;
   await Student.findByIdAndDelete(id)
   res.status(200).json({
       message: "student data deleted successful"
   })
}

module.exports={
    getAllStudents,
    getSingleStudent,
    createStudent,
    updateStudent,
    deleteStudent
}