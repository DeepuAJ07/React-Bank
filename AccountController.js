let Schema = require("./AccountSchema")

const Balan = (req,res)=>{
    Schema.findOne({Customer_id:req.params.Customerid}).populate('Customer_id').exec().then((Data)=>{
        res.send(Data)
    }).catch((Error)=>{
        console.log(Error);
    })
}

module.exports = {Balan}