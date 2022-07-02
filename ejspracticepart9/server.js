const dotenv = require('dotenv').config()
const colors = require('colors')
const express = require('express')
const app = express();
const expressLayouts = require('express-ejs-layouts')
const path = require('path')

// port
const PORT = process.env.SERVER_PORT

// route
app.use('/students', require('./routes/studentRoute'))

// static folder
app.use('/assets', express.static(path.join(__dirname, '/assets')))

// ejs setup
app.set('view engine', 'ejs')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)


// app listener
app.listen(PORT, ()=>{console.log(`server is running on port http://localhost:${PORT}`.bgGreen.black);})