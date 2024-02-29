const express = require ('express')
const app = express();
const port = 8001;
const mongoose = require("mongoose");
const config=require("./init/index");
const cors = require("cors");
require("dotenv").config()
app.use(cors()) 
app.use(express.json());

app.get("/ping",(req,res)=>{ 
  res.send("pong")
})
 
 

app.get("/",(req,res)=>{
  
  try { 
    let {mongoURI}=config
    mongoose.connect(mongoURI)
    res.send('📦 connected to mongoDB');
  } catch (err) {
    res.send('❌ error connecting to mongoDB:', err.message);
  }

}) 


const productRoute = require('./routes')
app.use('/data', productRoute)
app.listen(port,()=>{
  console.log(`Server is started on ${port}`) 
})