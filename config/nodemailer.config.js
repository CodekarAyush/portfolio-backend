const nodemailer = require('nodemailer');
require('dotenv').config()
exports.transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:`${process.env.USER}`,
        pass: `${process.env.PASSWORD}`
    }
})