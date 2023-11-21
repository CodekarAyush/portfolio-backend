const mongoose = require('mongoose');
require('dotenv').config()
const db = process.env
exports.connectDb =()=>{
    mongoose.connect(`mongodb+srv://${db.DB_USERNAME}:${db.DB_PASSWORD}@portfolio.9t0vujh.mongodb.net/${db.DB_CLUSTER}?retryWrites=true&w=majority`).then(()=>{
        console.log('connected to database ');
    }).catch((err)=>{
        console.log(err.message);
    })
}