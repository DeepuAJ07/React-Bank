const Schema=require("./userSchema")

 const Deposit= (req, res) =>{
 Schema.findOne({ Email: req.body.Email })
   .exec()
   .then((response) => {
   if(response){
    if(response.Password===req.body.Password){
     let Bal = response.Amount
      Schema.findOneAndUpdate(
        { Email: req.body.Email },
        { Amount: Bal + parseInt(req.body.Amount) } ).exec()
      res.json({
        Status:200,
        Data:response,
        msg:response.Amount
      })        } else{
        res.json({
          Status:400,
          Data:response,
          msg:"Incorrect Password"
        })
      }   
    }
    else{
      res.json({
        Status:500,
        msg:"Data not Exists"
      })
    }
   }
    
       ) .catch((err) => {
       res.send(err);
     });
 };

 module.exports={Deposit}
