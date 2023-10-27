const Schema=require('./userSchema')
const addUser= (req, res) =>{
    let newData = new Schema({
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      PANNumber: req.body.PANNumber,
      Amount: req.body.Amount,
      Contact: req.body.Contact,
      Email: req.body.Email,
      Password: req.body.Password,
    });
  
    newData
      .save()
      .then((data) => {
        res.json({
          Status:200,
          msg:'Registered'
        });
      })
      .catch((err) => {
   res.json({
    Status:500,
    msg:'Data Already Exists'
   });
      });
  }

const Login=(req, res)=> {
    console.log(req.body.Email);
    console.log(req.body.Password);
    Schema.findOne({ Email: req.body.Email })
      .exec()
      .then((user) => {
        console.log(user);
        if (user) {
          if (user.Password === req.body.Password) {
            res.json({
              status: 200,
              msg: "Login Sucessful",
              data: user,
            });
          } else {
            res.json({
              status: 500,
              msg: "Incorrect Password",
            });
          }
        } else {
          res.json({
            status: 500,
            msg: "Data Not Exists",
          });
        }
      })
      .catch((Error) => {
        res.json("Error", Error);
      });
  };

  module.exports={addUser,Login}