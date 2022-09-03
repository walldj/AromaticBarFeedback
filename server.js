const express = require('express');     //expressJS module
const dotenv = require('dotenv');       //dotenv module for .env files
const morgan = require('morgan');       //morgan to log requests
const path = require('path');

const app = express();

//reference the .env file to use PORT as variable
dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

//log of requests
app.use(morgan('tiny'))

//set view engine
app.set("view engine", "ejs")

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))

//load router
app.use('/', require('./server/routes/router'))

app.listen(PORT, ()=>{console.log(`Server running on http://localhost:${PORT}`)})