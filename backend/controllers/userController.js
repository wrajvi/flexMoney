const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");
const Payment = require("../model/userPayment")


const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, age, batch } = req.body;
  
    if (!name || !email || !password || !age || !batch) {
      if(!name)console.log("Name is not present")
      if(!email)console.log("email is not present")
      if(!password)console.log("password is not present")
      if(!age)console.log("age is not present")
      if(!batch)console.log("batch is not present")
      res.status(400);
      throw new Error("Please Enter all the Fields");
    }
  
    let user;
  
    // Check if the user exists
    const existingUser = await User.findOne({ email });
  
    if (existingUser) {
      // User already exists, check for payment
      const dt = new Date();
      const month = dt.getMonth();
      const year = dt.getFullYear();
  
      const isPaymentExist = await Payment.findOne({
        userID: existingUser._id,
        month,
        year,
      });
  
      if (isPaymentExist) {
        res.status(201).json({

            userID: existingUser._id,
            dt,
            month,
            year,
            message: "Payment Already Done For This Month! Thanks!"
        });
        
      }
  
      // Create payment for the existing user
      await Payment.create({ userID: existingUser._id, month, year });
  
      res.status(201).json({
        _id: existingUser._id,
        month,
        year,
      });
    } else {
      // User does not exist, create a new user
      user = await User.create({
        name,
        email,
        password,
        age,
        batch,
      });
  
      const dt = new Date();
      const month = dt.getMonth();
      const year = dt.getFullYear();
  
      // Create payment for the new user
      await Payment.create({ userID: user._id, month, year });
  
      res.status(201).json({
        _id: user._id,
        name: name,
        email,
        month,
        year,
        dt,
        message:"Successfully Registered!"
      });
    }
  
    if (!user) {
      res.status(400);
      throw new Error("User not found");
    }
  });




  module.exports = {
    registerUser,
  };