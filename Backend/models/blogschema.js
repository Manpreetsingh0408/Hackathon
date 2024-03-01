const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  description:{
    type:String,
    required:true,
  },
  username:{
    type: String,
    required: true,
  },
  image:{
    type: String,
  }

});

const blogModel = mongoose.model("userblogs",Schema);

module.exports = blogModel;