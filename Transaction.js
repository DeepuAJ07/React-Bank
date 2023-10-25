import axios from 'axios'
import React, { useState } from 'react'
import Home2 from './Home2'

function Transaction() {
    const[Email,setEmail]=useState('')
    const[Amount,setAmount]=useState(0)
    const[Email1,setEmail1]=useState('')
    const[Password,setPassword]=useState('')

    const[msg,setmsg]=useState('')

    const subfn = (e)=>{
e.preventDefault()
let Transaction={
    Email:Email,
    Password:Password,
    Amount:Amount,
    Email1:Email1
}
axios.post('http://localhost:4500/Trans',Transaction).then((trans)=>{
  console.log(trans.data.msg);
 setmsg(trans.data.msg)

}).catch((err)=>{
    console.log(err,'err');
})
    }

  return (
    <div>
      <Home2/>
        <form onSubmit={subfn}>
          
                <legend>Transaction</legend>
            <input type='email' placeholder='Enter your Email ID' onChange={(e)=>{setEmail(e.target.value)}}></input><br></br>
            <input type='password'placeholder='Enter your Password'onChange={(e)=>{setPassword(e.target.value)}}></input><br></br>
<input type='number'placeholder='Enter the Amount'onChange={(e)=>{setAmount(e.target.value)}}></input><br></br>
<input type='email'placeholder='Enter Receiver Email ID' onChange={(e)=>{setEmail1(e.target.value)}}/><br></br>
<button type='submit'>Submit</button><br></br>
<p>{msg}</p>
      

        </form>

    </div>
  )
}

export default Transaction