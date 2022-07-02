const path = require('path')
const color = require('colors')
const dotenv = require('dotenv').config()
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const connectMongoDB = require('./config/db');



// mongoDB connect
connectMongoDB()

// body init
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// dotenv port
const PORT = process.env.PORT || 5000

// express static folder
app.use('/assets',express.static(path.join(__dirname, '/assets')))

// ejs setup
app.set("view engine", "ejs")
app.set('layout', 'layouts/layout' )
app.use(expressLayouts)

// routes
app.use('/students', require('./routes/studentRouter'))


// listen port 
app.listen(PORT,() => console.log(`server is running on port ${PORT}`.bgGreen.black))