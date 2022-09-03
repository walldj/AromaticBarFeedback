const express = require('express')
const route = express.Router()

const controller = require('../controller/controller')
const { response, request } = require('express')

var FeedbackDB = require('../model/model');
//^ importing necessary node modules

//render index page by route
route.get('/',(req,res)=>{
    res.render('index');
})

//render form page by route
route.get('/FeedbackForm',(req,res)=>{
    res.render('FeedbackForm');
})

//render radios page by route
route.get('/FeedbackRadios',(req,res)=>{
    res.render('FeedbackRadios');
})

//render Success Splash page by route
route.get('/FeedbackSuccess',(req,res)=>{
    res.render('FeedbackSuccess');
})

//render Records page by route
route.get('/FeedbackRecords',(req,res)=>{
    console.log(req.query)

    //filter object for search query
    let filter = {}
    //filter parameters
    radio_names=['host_rate', 'bev_rate', 'clean_rate', 'overall_rate']
    ratings = ['Excellent', 'Good', 'Fair', 'Bad']

    //if entered query is valid and filter params are supplied
    if(radio_names.includes(req.query.question) && ratings.includes(req.query.answer)){
        filter[req.query.question] = req.query.answer;
        FeedbackDB.find(filter)
            .then(feedbacks => {
                res.render('FeedbackRecords', {feedbacks})
            })
            .catch(err => {
                res.status(500).send({message: err.message || "Retrieve Record Error"})
            })
    } else {            // if no filter params are supplied
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