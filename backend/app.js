const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fs = require('fs');


const orderRoutes = require("./routes/orders")
const userRoutes = require("./routes/user")

const cert = fs.readFileSync('keys/certificate.pem')
const options = {server: {sslCA: cert}};

const app = express();



///////////////////////
//mongodb+srv://admin:progen@cluster0.kzomc.mongodb.net/test
//"mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000"
//////////////////////

mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000", 
 {useNewUrlParser: true, useUnifiedTopology: true})
 .then(()=>
 
{
    console.log("connect to DB! YAY")
})
.catch(()=>
{
  console.log("Apparently Not!!!")  
}, options);




app.use(bodyParser.json())


/////////

app.use((reg,res,next)=>
{
   res.setHeader("Access-Control-Allow-Origin", '*'); 
   res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept, Authorization");


   res.setHeader("Access-Control-Allow-Methods", 
                 "*");
   next();
});



app.use("/api/user", userRoutes)
app.use("/api/orders", orderRoutes)
module.exports = app;



