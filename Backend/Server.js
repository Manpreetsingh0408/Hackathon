const express = require ('express')
const app = express();
const port = 8001;
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config()

async function main() {
  await mongoose.connect(
    process.env.MONGO_URI
  );
}
app.use(cors())
app.get('/',(req,res)=>{
  main()
  .then(() => {
    res.send("Connection created Successfully!");
  })
  .catch((err) => {
    res.send(err)
  });
})
app.get('/ping',(req,res)=>{
  res.send("pong")
})
app.listen(port,()=>{
  console.log(`Server is started on ${port}`)
})