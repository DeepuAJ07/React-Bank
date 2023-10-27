let Schema = require("./userSchema")

const Loan=(req,res)=>{
    Schema.findOne({Email:req.body.Email}).exec().then((Loan)=>{
      if(Loan){
        if(Loan.Amount>=10000){
          res.json({
            status:200,
            msg:"Approve Loan",
            data:Loan
          })
              }else{
          res.json({status:500,
          msg:"Loan Application Rejected",
          data:Loan})
              }
              }
              else{
                res.send('User not find')
              }
     
    }).catch((err)=>{
      res.send(err)
    })
  }

  module.exports={Loan}
  