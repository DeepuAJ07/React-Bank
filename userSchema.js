var mongoose= require("mongoose")
var Schema = new mongoose.Schema({
   FirstName:String,
LastName:String,
PANNumber:{
    type:String ,
    unique:true,
    required:true,
    dropDups:true
},
Amount:Number,
Contact:Number,
Email:{
    type:String,
    unique:true,
    required:true,
    dropDups:true
},
Password:String,

    
})




var model = mongoose.model("Data",Schema)
module.exports= model