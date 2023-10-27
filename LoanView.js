let Schema = require("./bankSchema");

let LoanView = (req,res)=>{
  Schema.find().exec().then((Data)=>{
    res.send(Data);
    console.log(Data);
  }).catch((Error)=>{
    console.log(Error);
  })
}


module.exports = { LoanView };
