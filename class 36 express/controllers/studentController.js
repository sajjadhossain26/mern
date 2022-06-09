const fs = require('fs');
// const { rewriter } = require('json-server');
const path = require('path')

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
const getAllStudents=(req, res)=>{
    if(students.length>0){
         res.status(200).json(students)
    }else{
        res.status(404).json({
            message: 'Data Invalid'
        })
    }

}
// get single student
const getSingleStudent=(req, res)=>{
 let id = req.params.id;
 if(students.some(data=> data.id==id)){
 res.status(200).json(students.find(data=>data.id==id))
 }else{
     res.status(404).json({
         message: "Single data invalid"
     })
 }
}

// create new student
const createStudent=(req, res)=>{
    if(req.body.name && req.body.age && req.body.skill){
        students.push({
            id: getlatestId(),
            name: req.body.name,
            age: req.body.age,
            skill: req.body.skill
        })
 fs.writeFileSync(path.join(__dirname, '../data/students.json'), JSON.stringify(students))
 res.status(202).json({
   message: "student data created successfull"
 })
    }else{
        res.status(400).json({
            message: "You have put form data"
        })
    }

}

// edit student data
const updateStudent=(req, res)=>{
    let id = req.params.id;

    if(!students.some(data=>data.id==id)){
     res.status(404).json({
         message: "Invalid id"
     })
    }
    if(req.body.name==''||req.body.age==''||req.body.skill==''){
       res.status(404).json({
           message: "Field must not be empty"
       })
    }else{
        students[students.findIndex(data=>data.id==id)]={
        id: id,
        name: req.body.name,
        age: req.body.age,
        skill: req.body.skill
    }
    fs.writeFileSync(path.join(__dirname, '../data/students.json'), JSON.stringify(students))
     res.status(202).json({
           message: "student data updated successfully"
       })
    }
}

// delete student data
const deleteStudent=(req, res)=>{
    let id = req.params.id;
    if(students.some(data=> data.id == id)){
       let deleted_data=students.filter(data=> data.id != id);
       fs.writeFileSync(path.join(__dirname, '../data/students.json'), JSON.stringify(deleted_data))
       res.status(202).json({
           message: "student data deleted"
       })
    }else{
        res.status(400).json({
            message: "Data not found"
        })
    }
}

module.exports={
    getAllStudents,
    getSingleStudent,
    createStudent,
    updateStudent,
    deleteStudent
}