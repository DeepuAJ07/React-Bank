let Schema = require('./bankSchema')

const loanDetails = (req,res)=>{
    Schema.findOne({Email:req.body.Email}).populate('C_id').exec().then((data)=>{
        res.send(data)
    }).catch((Error)=>{
        res.send(Error)
    })
}

module.exports={loanDetails}
