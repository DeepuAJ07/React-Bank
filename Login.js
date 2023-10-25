import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";

function Login(props) {
 const[Email,setEmail]=useState("")
 const[Password,setPassword]=useState("")
 const Navigate = useNavigate();

console.log(props.Email);
const subfn=(e)=>{
e.preventDefault()
const login={
  Email:Email,
  Password:Password
}
console.log(login);
axios.post("http://localhost:4500/login",login
).then((user)=>{
  console.log(user.data);
  if(user.data.msg==="Login Sucessful"){

Navigate('/Home2')


  }
  else if(user.data.msg==="Incorrect Password"){

    alert("Incorrect Password")
  }
  else if(user.data.msg==="Data Not Exists"){
    alert("Register to Continue")
    Navigate("/Registration")
  }
}).catch((err)=>{
  console.log("Error".err);
})

    } 
   
    
 
    return (
      <div className="LoginForm">
        <Helmet>
          <title>Bank-Login</title>
        </Helmet>
        <form onSubmit={subfn}>

          
          <div className="Login">
          <h2>Login Form</h2>
            <label for="uname">
              <b>Username</b>
            </label>
            <input
              className="LoginInput"
              type="text"
              placeholder="Enter Username"
              name="Email"
              id="x"
              required
              onChange={(e)=>{setEmail(e.target.value)}}
            />
            <br></br> <br></br>
            <label for="psw">
              <b>Password</b>
            </label>
            <input
              className="LoginInput"
              type="password"
              placeholder="Enter Password"
              name="Password"
              id="y"
              required
              onChange={(e)=>{setPassword(e.target.value)}}
            />
            <br></br>
            <br></br>
            <button type="submit" className="Loginbtn">
              Login
            </button>
            <br></br>
            <br></br>
          </div>

         
        </form>
      </div>
    );
  }

export default Login;
