const express = require('express');
const app= express()
const dotenv= require('dotenv').config()
const connectMongoDB = require('./config/db')
const colors= require('colors')

// mongoDB connection init
connectMongoDB()
// port form env
const port = process.env.SERVER_PORT
// request body init
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api/admin', require('./routes/admin'))

app.listen(port, ()=> console.log(`Server is running on port ${port}`.bgGreen.black))