const express = require('express')
const route = express.Router()

const axios = require('axios')

const controller = require('../controller/controller')
const { response } = require('express')

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

route.get('/FeedbackRecords',(req,res)=>{

    //get request to api/feedbacks
    axios.get(`http://localhost:${process.env.PORT}/api/feedbacks`)
        .then(function(response){
            res.render('FeedbackRecords', {feedbacks : response.data})
        })
        .catch(err => {
            res.send(err);
        })
    
    // res.render('FeedbackRecords'/*, {feedbacks}*/)
})

//API route
route.post('/api/feedbacks', controller.create)
route.get('/api/feedbacks', controller.select)

module.exports = route