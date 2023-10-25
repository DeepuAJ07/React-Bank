import axios from 'axios'
import React, { useState } from 'react'
import Home2 from './Home2'
const Cus_Id=localStorage.getItem('C_id')
// import './LoanStatus.css'

function LoanStatus() {
const[Email,setEmail]=useState("")
const[Amount,setAmount]=useState(0)
const[msg,setmsg]=useState("")

const subfn=(e)=>{
    e.preventDefault()
    let Send = {
      Email:Email
    }
    axios.post("http://localhost:4500/LoanStatus",Send).then((Status)=>{
   console.log(Status);
if(Status.data.Status===200){
  console.log(Status);
  setmsg(Status.data.msg)
setAmount(Status.data.Data.Amount)
}
else if(Status.data.Status===400){
  setmsg(Status.data.msg)
  
}else{
  setmsg('Loan request rejected')
}
  }).catch((Err)=>{
        console.log(Err,"Error");
    })
}

  return (
    <div >
      <Home2/>
        <form onSubmit={subfn}>
            <input className='RegisIpt' type='email'placeholder='Type your ID' onChange={(e)=>{setEmail(e.target.value)}}></input>
            <button className='Regisbtn' type='submit'>Submit</button>
        </form>
        <h2>{msg}</h2>
        <h2>{Amount}</h2>

    </div>
  )
}


export default LoanStatus