const express = require('express');
const { mailSend } = require('../controller/mail.controller');
const router = express.Router();

router.post('/mail', mailSend);

module.exports= router;
