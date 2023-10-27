let Schema=require("./bankSchema")
let userSchema=require("../users/userSchema")
const applyLoan=async(req,res)=>{
    let id=""
await userSchema.findOne({Email:req.body.Email}).exec().then(data=>{
id=data._id
})
    let newData=new Schema({
        C_id:id,
       Email:req.body.Email,
       LoanType:req.body.LoanType,
       Amount:req.body.Amount
    })
   await newData.save().then((details)=>{
   
        res.json({
            Status:200,
            msg:'Loan Applied',
            data:details
        })
   
   

    }).catch((err)=>{
         res.json({
            Status:500,
            msg:'Loan not applied',
            
        })
        console.log(err);
    })
}

module.exports={applyLoan}