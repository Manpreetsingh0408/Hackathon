const express = require("express");
const router=express.Router()
const mongoose = require("mongoose");
const config = require("./init/index");
const userModel=require("./models/user");
const blogModel=require("./models/blogschema")
const validation=require("./validator/joivalidation")
require("dotenv").config();


const app = express();
app.use(express.json());

const validateRequest = (req, res, next) => {
    const { error } = validation.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};



mongoose.connect(config.mongoURI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });


router.post("/signup", async (req, res) => {
    try {
        const newUser = await userModel.create(req.body);
        if (newUser) {
            res.status(201).json({newUser}); 

        } else {
            res.status(400);
            throw new Error("Failed To Create User");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

router.get("/signup", async (req, res) => {
    try{
    const getData = await userModel.find({})
    res.status(201).send(getData) 
    }catch(err){
        res.status(400).send(err) 
    }

});


router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        
        if (user) {
            if (user.password === password) {
                res.status(201).json({ user});
            } else {
                res.json("The password is incorrect");
            }
        } else {
            res.json("No such user exists");
        }
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal Server Error");
    }

});

router.post("/blog",validateRequest,async(req,res)=>{
    try{

        const blog=await blogModel.create(req.body);
        res.status(201).json({blog})
    }
    catch(err){
        res.send("error")
    }

})





module.exports=router

