const { Hire } = require("../models/hire.model");
const ejs = require('ejs');
const path = require('path');
const { transporter } = require("../config/nodemailer.config");
exports.mailSend = async (req, res) => {
    const { userName, email, message } = req.body.form;
  
    try {
      const formData = await Hire.create({ userName, email, message });
      console.log(formData);
  
      ejs.renderFile(path.join(__dirname, '../views', 'mail.ejs'), {locals:{userName,email,message}}, (err, html) => {
        if (err) {
          console.error('Error rendering EJS template:', err);
          return res.status(500).send('Internal Server Error');
        }
  
        const mailOptions = {
          from: process.env.USER,
          to: email,
          subject: 'work inquiry',
          html: html
        };
  
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({message:error.message});
          }
  
          console.log('Email sent: ' + info.response);
          res.status(200).json({ message: 'Mail sent!' });
        });
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  