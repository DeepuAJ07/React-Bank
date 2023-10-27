let Schema = require("./userSchema")

const Balance = (req, res)=> {
    Schema.findOne({ Email: req.body.Email })
      .exec()
      .then((Balance) => {
        if(Balance){
if(Balance.Password===req.body.Password){
  res.json({
    Status:200,
    data:Balance,
    msg:Balance.Amount
  })
}
else{
  res.json({
    Status:400,
    msg:'Invalid Password'
  })
}
        }
        else{
         res.json({
          Status:500,
          msg:'Data not Exist'
        }) 

        }
      
      })
      .catch((err) => {
        res.send(err);
      });
      
  };

  module.exports={Balance}