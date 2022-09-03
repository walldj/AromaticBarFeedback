const express = require('express')
const route = express.Router()

const axios = require('axios')

const controller = require('../controller/controller')
const { response, request } = require('express')

var FeedbackDB = require('../model/model');


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
    res.render('FeedbackSuccess');
})

route.get('/FeedbackRecords',(req,res)=>{

    //get request to api/feedbacks
    // axios.get(`http://localhost:${process.env.PORT}/api/feedbacks`)  
    //     .then(function(response){
    //         res.render('FeedbackRecords', {feedbacks : response.data})
    //     })
    //     .catch(err => {
    //         res.send(err);
    //     })
    console.log(req.query)

    let filter = {}
    radio_names=['host_rate', 'bev_rate', 'clean_rate', 'overall_rate']
    ratings = ['Excellent', 'Good', 'Fair', 'Bad']
    if(radio_names.includes(req.query.question) && ratings.includes(req.query.answer)){
        filter[req.query.question] = req.query.answer;
        FeedbackDB.find(filter)
            .then(feedbacks => {
                res.render('FeedbackRecords', {feedbacks})
            })
            .catch(err => {
                res.status(500).send({message: err.message || "Retrieve Record Error"})
            })
    } else {
        FeedbackDB.find()
            .then(feedbacks => {
                res.render('FeedbackRecords', {feedbacks})
            })
            .catch(err => {
                res.status(500).send({message: err.message || "Retrieve Record Error"})
            })
    }
})

//API route
route.post('/api/feedbacks', controller.create)
route.get('/api/feedbacks', controller.select)
// route.get('/api/feedbackFilter', controller.filter)

module.exports = route