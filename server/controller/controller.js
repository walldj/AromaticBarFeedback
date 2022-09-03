var FeedbackDB = require('../model/model');

//create and save feedback
exports.create = (req,res)=>{
    //check for empty request
    if(!req.body){
        res.status(400).send({ message: "Content cannot be empty."});
        return;
    }

    //new feedback
    const feedback = new FeedbackDB({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        host_rate: req.body.host_rate,
        bev_rate: req.body.bev_rate,
        clean_rate: req.body.clean_rate,
        overall_rate: req.body.overall_rate
    })

    //save feedback in the database
    feedback
        .save(feedback)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.error(err);
            res.status(500).send({
                message: "Create Record Error"
            })
        })
}

//select feedback record/s
exports.select = (req,res)=>{
    FeedbackDB.find()
        .then(feedback => {
            res.send(feedback)
        })
        .catch(err => {
            res.status(500).send({message: err.message || "Retrieve Record Error"})
        })
}

