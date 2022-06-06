const express=require('express');
const app= express();
const dotenv= require('dotenv').config()

// environment variable init
const port = process.env.SERVER_PORT

// request body init
app.use(express.json());
app.use(express.urlencoded({extended: false}))
// student route 
app.use('/api/students', require('./routes/student'))

// add express server listener with port
app.listen(port, ()=> console.log(`server is running on port ${port}`))