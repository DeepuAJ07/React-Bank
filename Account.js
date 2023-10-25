import React, { useState } from "react";
import "./Account.css";
import { Helmet } from "react-helmet";
import axios from "axios";
import Home2 from "./Home2";

function Account() {
const[Email,setEmail]=useState('')
const[Password,setpassword]=useState('')
const[Amount,setAmount]=useState(0)
const[Check,setCheck]=useState(0)
const[Balance,setBalance]=useState(0)

const clickfn=()=>{
  let Balance={
    Email:Email,
    Password:Password
  }
  axios.post("http://localhost:4500/Balance").then((Balance)=>{
    console.log(Balance);
  })
}

const subfn=(e)=>{
e.preventDefault()

const Balance={
  Email:Email,
  Password:Password,
  Amount:Amount
}
console.log(Balance);
axios.post('http://localhost:4500/Deposit',Balance).then((Response)=>{
  console.log(Response);
console.log(Response.data.Status);

  
setCheck(Response.data.msg);
}).catch((err)=>{
  console.log(err);
})
}

return(

  <div >
<Home2/>
    <h3>Deposit</h3>
  <form onSubmit={subfn}>
    <label>Email:</label><input type="email"placeholder="Type your Email ID here"onChange={(e)=>{setEmail(e.target.value)}}></input>
    <label>Password:</label><input type='password'placeholder="Type your Password"onChange={(e)=>{setpassword(e.target.value)}}></input>
    <label>Amount:</label><input type="number"placeholder="Enter the Amount"min={1}onChange={(e)=>{setAmount(e.target.value)}}></input>
   <button type="submit">Submit</button>
    <p>Balance:
      {Check}</p>
      <button onClick={clickfn}>Balance</button>
    </form>

   
    </div>
)
}

export default Account;
