import axios from 'axios'
import React, { useState } from 'react'
import "./Account.css";
import Home2 from './Home2';
function Balance() {
    const[Email,setEmail]=useState('')
    const[Password,setPassword]=useState('')
    const[value,setvalue]=useState(0)

    const subfn=(e)=>{
e.preventDefault()
let Balance={Email:Email,Password:Password}
axios.post('http://localhost:4500/Balance',Balance).then((bal)=>{
  console.log(bal);
setvalue(bal.data.msg);
}).catch((err)=>{
    console.log(err);
})
    }

  return (
    <div >
      <Home2/>
       
        <form onSubmit={subfn}>
        <input type='email'placeholder='Enter your Email ID'onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type='password'placeholder='Enter your Password'onChange={(e)=>{setPassword(e.target.value)}}/>
        <button type='submit'>Submit</button>
        <p>Balance:{value}</p>
        </form>
      
        </div>
  )
}

export default Balance