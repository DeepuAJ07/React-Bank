import React, { useState } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import "./Account.css";
import Home2 from './Home2';


function Account2() {
    const[Email,setEmail]=useState("")
  const[Password,setpassword]=useState('')
    const[Amount,setAmount]=useState(0)
const[Check,setCheck]=useState('')

const clickfn=()=>{
  let Balance={
    Email:Email,
    Password:Password
  }
  axios.post("http://localhost:4500/Balance")
}
    const subfn=(e)=>{
e.preventDefault()
let Balance={
    Email:Email,
    Password:Password,
    Amount:Amount
}
axios.post('http://localhost:4500/Withdrawl',Balance).then((response)=>{
  console.log(response);
    setCheck(response.data.msg);
    console.log(response.data.msg);

}).catch((err)=>{
    console.log('Error',err);
})
    }
  return (
  <div>
  <Helmet>
    <title>Withdrawl-Bank</title>
  </Helmet>
  <Home2/>
  <div >
    <form onSubmit={subfn}>
        <label>Email:</label><input type='email'onChange={(e)=>{setEmail(e.target.value)}}></input>
        <label>Password:</label><input type='password'onChange={(e)=>{setpassword(e.target.value)}}/>
        <label>Amount:</label><input type='number'onChange={(e)=>{setAmount(e.target.value)}}></input>
    <button type='submit'>Submit</button>
    <p>Balance:{Check}</p>
    <button onClick={clickfn}> Balance </button>
    
    </form>
  </div>
  </div>
    
  )
}

export default Account2