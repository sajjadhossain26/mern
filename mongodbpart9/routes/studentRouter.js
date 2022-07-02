const express = require('express');
const { allStudent, createStudent, singleStudent, showAddForm, deleteStudent, editData } = require('../controller/studentController');
const router = express.Router();
const multer = require('multer')
const path = require('path')

// multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
      cb(null, path.join(__dirname, '../assets/upload'))
    },
    filename: (req, file, cb) =>{
     cb(null, Date.now()+'_'+file.originalname)
    }
})

// multer load
const upload = multer({
    storage: storage
}).single('photo')

router.get('/', allStudent)
router.get('/create', showAddForm)
router.get('/:id', singleStudent)
router.get('/delete/:id', deleteStudent)
router.get('/edit/:id', editData)
router.post('/', upload, createStudent)

module.exports = router