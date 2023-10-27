let Schema=require('./bankSchema')

const rejectLoan = (req,res)=>{
    Schema.findOneAndDelete({Email:req.body.Email}).exec().then((Reject)=>{
res.json({
    Status:200,
    Eligible:"No",
    data:Reject,
    msg:"Loan Request Rejected"
})
    }).catch((err)=>{
        res.send(err,"Error")
    })
}

module.exports={rejectLoan}

