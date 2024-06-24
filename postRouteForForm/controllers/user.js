const User = require("../Models/user");
const bodyParser = require("body-parser");
const express=require("express")
const router=express.Router();
const path = require("path");



router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

let role="";




////////////////////////

async function handleSign_Up(req, res) {
    try {
        // Check if user already exists based on email
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).send("User with the same email already exists.");
        }

        if(req.body.applyFor!='Ambassador'&&req.body.applyFor!="Director"){
          return res.status(400).send("You can apply for only Drector or Ambassador not any other choice");
        }


        if(req.body.gender!='male'&&req.body.gender!="female"&&req.body.gender!="other"){
          return res.status(400).send("Age choice is wrong, select it carefully!");
        }


        if(req.body.yearOfStudy<3){
          return res.status(400).send("This program is for the students who are in their 3 or 4 year of degree!");
        }


        if(req.body.rigion!='punjab'){
          return res.status(400).send("This program is only for Punjab Region!");
        }


        

        // Create a new user instance
        const newUser = new User({
            applyFor: req.body.applyFor,
            fullName: req.body.fullName,
            email: req.body.email,
            whatsappNumber: req.body.whatsappNumber,
            gender: req.body.gender,
            instituteName:req.body.instituteName,
            fieldOfStudy: req.body.fieldOfStudy,
            yearOfStudy: req.body.yearOfStudy,
            rigion: req.body.rigion,
            facebookLink: req.body.facebookLink,
            instaLink: req.body.instaLink,
            linkedinLink: req.body.linkedinLink,
            experience: req.body.experience,
            skills: req.body.skills,



        });

        // Save the new user
        await newUser.save();
        console.log("Record inserted successfully");

       
        // Redirect to email verification page
        return res.status(200).send("Successfully");
    
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).send("Internal Server Error");
    }
}










module.exports={
  
    handleSign_Up}