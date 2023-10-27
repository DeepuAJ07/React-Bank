
const mongoose = require("mongoose");
var Schema = new mongoose.Schema({
  C_id:{
type:mongoose.Schema.Types.ObjectId,
ref: "Data",
},
  Email: {
    type: String,
    unique:true,
    required: true,
    DropDups:true
  },


  LoanType: {
    type: String,
  },
  Amount: {
    type: Number,
    
  },
  eligibility: {
   type:Boolean,
    default:false,
  },
});

var model = mongoose.model("Loan", Schema);
module.exports = model;
