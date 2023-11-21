const mongoose = require('mongoose');
const HireSchema = new mongoose.Schema({
    userName :{
        type:String,
        required:true,

    },
    email :{
        type:String,
        required:true,
    },
    message :{
        type:String,
        required:true,
        maxlength: 450
    },
})

exports.Hire = mongoose.model('hiring',HireSchema )