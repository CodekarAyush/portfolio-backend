const mongoose = require('mongoose');
require('dotenv').config()
const db = process.env
exports.connectDb =()=>{
    mongoose.connect(`mongodb+srv://ayushgautam:JjIf0R1b0Q0mtXfL@portfolio.9t0vujh.mongodb.net/mails`).then(()=>{
        console.log('connected to database ');
    }).catch((err)=>{
        console.log(err.message);
    })
}