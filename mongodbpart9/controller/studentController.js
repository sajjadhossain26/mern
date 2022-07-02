const Student = require("../models/studentModel")


/**
 *@desc get all student data
 *@name get/student
 *@access public
 */

const allStudent =async (req, res) =>{
    let student = await Student.find()
    res.render('index', {student})
}

/**
 *@desc get Single student data
 *@name get/student
 *@access public
 */

const singleStudent = async (req, res) =>{
    let id = req.params.id
    let singleData =await Student.findById(id)
    res.render('show', {singleData})
}

/**
 *@desc create student form student data
 *@name create student
 *@access public
 */

const showAddForm = (req, res) =>{
    res.render('create')
}

/**
 *@desc create student form student data
 *@name create student
 *@access public
 */

const deleteStudent = async (req, res) =>{
    let id = req.params.id;
    await Student.findByIdAndDelete(id)
    res.redirect('/students')
}

/**
 *@desc get Single student data
 *@name post
 *@access public
 */

const createStudent = (req, res) =>{
    Student.create({
        ...req.body,
        photo: req.file.filename
    })
    res.redirect('/students')
}

/**
 * @desc edit student data
 * @name get
 * @access public
 */

const editData = async(req, res) => {
    const id = req.params.id;
    const editSingleData = await Student.findByIdAndUpdate(id)
    res.render('edit', {editSingleData})
}

module.exports = {
    allStudent,
    showAddForm,
    singleStudent,
    createStudent,
    deleteStudent, 
    editData
}