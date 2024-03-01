const mongoose=require("mongoose"); 

const blogSchema=new mongoose.Schema({
    heading:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
       type:String,
    },
    username:{
        type:String
    }
})

const blogModel= mongoose.model("userblogs",blogSchema) 

module.exports=blogModel