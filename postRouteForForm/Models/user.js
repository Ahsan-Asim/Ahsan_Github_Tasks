const mongoose = require("mongoose");

// Define user schema
const userSchema = new mongoose.Schema({
    applyFor: { type: String, required: true }, // Make 'name' field unique
    fullName: { type: String, required: true },

    email: { type: String, unique: true }, // Make 'email' field unique
    whatsappNumber: { type: String },

    gender: {type:String, required:true},
    instituteName:{type:String,required:true},

    fieldOfStudy: {type:String, required:true},
    yearOfStudy:{type:String, required:true},
    rigion:{type:String, required:true},
    facebookLink:{type:String},
    instaLink:{type:String},
    linkedinLink:{type:String},
    experience:{type:String},
    skills:{type: [String],
      required:false
    }





});

// Create user model
const User = mongoose.model('User', userSchema);

module.exports=User;