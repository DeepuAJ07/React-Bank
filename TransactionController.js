let Schema =require('./userSchema')

let Transaction = (req,res)=>{
  Schema.findOne({Email:req.body.Email}).exec().then((data)=>{
console.log(data);
if(data){
  if(data.Password===req.body.Password){
    let Bal=data.Amount
    if(Bal>=req.body.Amount){
      Schema.findOneAndUpdate({Email:req.body.Email},{Amount:Bal-parseInt(req.body.Amount)}).exec().then((balance)=>{
      Schema.findOne({Email:req.body.Email1}).exec().then((balance2)=>{
    let Bal2=balance2.Amount;
     Schema.findOneAndUpdate({Email:req.body.Email1},{Amount:Bal2+parseInt(req.body.Amount)}).exec().then((Trans)=>{
    res.json({Status:200,
    msg:'Transaction Sucessfull',
    data:Trans});
     })
     
    
      })
      })
    }else{
      res.json({
        status:400,
        msg:'Insufficient Balance'
      })
    }
  
  }
  else{
    res.json({
      status:500,
      msg:'Incorrect Password'
    })
  }

  }else{
    res.json({
      status:600,
      msg:'Data not Exist'
    })
  }
 
  






  }).catch((err)=>{
    console.log(err);
  })
}

module.exports={Transaction}