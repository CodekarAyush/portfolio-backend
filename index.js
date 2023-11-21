const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 3000;
const mailRouter = require('./routes/mail.route');
const cors = require('cors');
const path = require('path');
const { connectDb } = require('./config/db.config');
connectDb()

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.json())
app.use(cors())

app.use('/api',mailRouter)

app.get('/test',(req,res)=>{
  res.status(200).json({message:"backend running perfectly !"})
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
