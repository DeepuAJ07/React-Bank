let Schema=require("./userSchema")

const Admin=(req, res)=> {
    Schema.find(
      
    )
      .exec()
      .then((Admin) => {
       
     res.send(Admin)
       }
      )
      .catch((err) => {
        res.send(err);
        
      });
  };

  module.exports={Admin}