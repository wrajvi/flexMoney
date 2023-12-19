const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema(
    {
      userID: {type: mongoose.Schema.Types.ObjectId,required: true,ref: "User",},
      amount: {type: Number,default: 500,},
      month: {type: Number,required: true,},
      year: {type: Number,required: true,},
    },
    {timestamps: true,}
  );

const Payment = mongoose.model("Payment",paymentSchema);

module.exports = Payment;