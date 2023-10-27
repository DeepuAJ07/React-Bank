var mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/BankRegistration")
var db = mongoose.connection
db.on("error",console.error.bind("error"))
db.once("sucessfull",function(){
    console.log("completed")

})

module.exports=db
