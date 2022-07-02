const express=require('express');
const app= express();
const dotenv= require('dotenv').config()
const colors= require('colors')
const connectMongoDB=require('./config/db')
const multer = require('multer')
const path = require('path')


// connection mongodb init
connectMongoDB()
// environment variable init
const port = process.env.SERVER_PORT

// request body init
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// photo upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
         if(file.fieldname == "photos"){
          cb(null, './media/users')
        }else if(file.fieldname == "cv"){
        cb(null, './media/cv')
        }
        
    },
    filename: (req, file, cb) => {
        
        if(file.fieldname == "photos"){
            let extname= path.extname(file.originalname)
            let filename= Date.now() + '_' + Math.round(Math.random()*10000000) + extname
            cb(null, filename)
        }else if(file.fieldname == "cv"){
            let extname= path.extname(file.originalname)
            let date = new Date();
            let current_date = date.getDate()+'-'+date.getMonth()+'-'+date.getFullYear();
            let filename = current_date+'-'+file.originalname;
            cb(null, filename)
        }

      
    }
})
const upload = multer({
    storage :storage,
    limits: (1024*1024),
    fileFilter: (req, file, cb) => {

        if(file.fieldname == 'photos'){
                if(file.mimetype=='image/png' || file.mimetype=='image/jpeg' || file.mimetype=='image/jpg'){
                cb(null, true)
                }else{
                cb(console.log('File type invalid'))
                }

        }else if(file.fieldname == 'cv'){
             if(file.mimetype=='application/pdf'){
            cb(null, true)
            }else{
            cb(console.log('cv type invalid'))
            }
        }
  
    }
})
// upload photo fields
let cpUpload = upload.fields([
    {
        name: "photos",
        maxCount: 10
    },
     {
        name: "cv",
        maxCount: 2
    }
])
app.post('/upload', cpUpload , (req, res) => {
    console.log(req.files);
})

// student route 
app.use('/api/students', require('./routes/student'))
app.use('/api/admins', require('./routes/admin'))

// add express server listener with port
app.listen(port, ()=> console.log(`server is running on port ${port}`.bgBlue.black))