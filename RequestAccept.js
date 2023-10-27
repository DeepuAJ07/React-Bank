let Schema = require("./bankSchema")

const AcceptLoan = (req,res)=>{
Schema.findOneAndUpdate({Email:req.body.Email},{eligibility:true}).exec().then((Accept)=>{
    res.json({
        Status:200,
        Eligible:"Yes",
        data:Accept,
        msg:"Loan Accepted"
    })
}).catch((err)=>{
    res.send(err)
})
}

module.exports={AcceptLoan}