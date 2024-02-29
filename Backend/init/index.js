const mongoose = require("mongoose");
const express = require ('express');
const User = require("../models/User");
require("dotenv").config({path:"../.env"})
const app = express();

async function main() {
  await mongoose.connect(
    process.env.MONGO_URI
  );
}

main()
  .then(() => {
   
    console.log("Connection created Successfully!");
  })
  .catch((err) => {
    console.log(err);
  });
const users = [
  new User({
    username: "Manpreet",
    password:"manpreet1"
  }),
  new User({
    username: "Adharsh",
    password:"adharsh1"
  }),
  new User({
    username: "sravan",
    password:"sravan1"
  }),
  new User({
    username: "gurpreet",
    password:"gurpreet1"
  })
]

User.insertMany(users)
  .then((docs)=>{
    console.log('====================================');
    console.log("Data Pushed");
    console.log('====================================');
  })
  .catch((err)=>{
    console.log('====================================');
    console.log(err);
    console.log('====================================');
  })
