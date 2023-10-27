let mongoose = require("mongoose")
let Schema = new mongoose.Schema({
    Customer_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Data"
    }
})

let model = mongoose.model('Account',Schema)

module.exports=model