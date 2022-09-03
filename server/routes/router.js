const express = require('express')
const route = express.Router()

route.get('/',(req,res)=>{
    res.render('index');
})

route.get('/FeedbackForm',(req,res)=>{
    res.render('FeedbackForm');
})

route.get('/FeedbackRadios',(req,res)=>{
    res.render('FeedbackRadios');
})

route.get('/FeedbackSuccess',(req,res)=>{
    res.render('FeedbackSucess');
})

module.exports = route