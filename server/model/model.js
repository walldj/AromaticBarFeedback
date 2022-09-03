const mongoose = require('mongoose');

//create mongo schema
var schema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    host_rate:{
        type:String,
        required: true
    },
    bev_rate:{
        type:String,
        required: true
    },
    clean_rate:{
        type:String,
        required: true
    },
    overall_rate:{
        type:String,
        required: true
    },
    date:{
        type: Date, default: Date.now 
    }
})

const FeedbackDB = mongoose.model('feedbackdb', schema);

module.exports = FeedbackDB;