const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,unique:true},
    age:{type: Number,min: 18,max: 65,required:true},
    batch:{type: String,required:true,enum: {values: ["6-7 AM", "7-8 AM", "8-9 AM", "5-6 PM"],},},
    pic:{type:String,default:"https://i.ibb.co/vHbwvqD/user.png"}

},{timestamps:true}
);

const User = mongoose.model("User",userSchema);

module.exports = User;