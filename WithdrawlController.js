let Schema = require("./userSchema")

let Withdrawl=(req, res)=> {
    Schema.findOne({ Email: req.body.Email })
      .exec().then((response)=>{
        
        if(response){
          if(response.Password===req.body.Password){
       let bal=response.Amount
       if(bal>=req.body.Amount){
        Schema.findOneAndUpdate({Email:req.body.Email},{Amount:bal-parseInt(req.body.Amount)}).exec();
        res.json({
          Status:200,
          Data:response,
          msg:response.Amount
        })
       }else{
        res.json({
          Status:400,
          msg:"Insufficient Balance"
        })
       }
          }else{
            res.json({
              Status:440,
              msg:"Incorrect Password"
            })
          }

        }
        else{
         res.json({
          Status:500,
          msg:"Data not Exist"
         })
        }
       console.log(response);
      }).catch((err)=>{
        console.log(err);
      })
    }
  module.exports={Withdrawl}
  
