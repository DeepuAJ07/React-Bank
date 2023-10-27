let Schema = require("./bankSchema")


    const loanStatus = 
        (req,res)=>{
        Schema.findOneAndUpdate({Email:req.body.Email},{eligibility:true}).populate('C_id').exec().then((LoanStatus)=>{
            console.log(LoanStatus);
          let Bal = LoanStatus.C_id.Amount
        
            if(Bal>=20000 && LoanStatus.eligibility===true){
                res.json({
       
                     Status:200,
                    msg:"Loan Accepted",
                    Data:LoanStatus
                })
               }else if(Bal<20000 ){
           
                res.json({
                    Status:400,
                    msg: "Not enough balance ",
                    Data:LoanStatus
                })
               }
          
           
        //    }
   
          
        }).catch((Err)=>{
            res.send(Err)

        })
        }



module.exports={loanStatus}