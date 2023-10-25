import React, { useState } from 'react'
import "./SavingsAccount.css"
import axios from 'axios'
function SavingsAccount() {
 const[FirstName,setFname]=useState("")
 const[LastName,setLname]=useState("")
 const[PANCard,setPAN]=useState("")
 const[IntialAmount,setIntial]=useState()
 const[Transaction,setTrans]=useState("")

  const subfn=(e)=>{
e.preventDefault()
const Account={
  FirstName:FirstName,
  LastName:LastName,
  PANCard:PANCard,
  IntialAmount:IntialAmount,
  Transaction:Transaction
}
console.log(Account);
axios.post("http://localhost:4500/SavingsAccount",Account).then((res)=>{
  console.log("Sucess",res);
}).catch((err)=>{console.log("Error",err);})
console.log("Submitted");
  }

  return (
    <div className='Savings'>

      <h2>Account Creation Form
      </h2>
        <form onSubmit={subfn}>
            <input type='text'name="FirstName" placeholder='First Name'onChange={(e)=>setFname(e.target.value)}></input>
            <input type='text'name="LastName" placeholder='Last Name'onChange={(e)=>setLname(e.target.value)}></input>
            <input type='text'name="PANCard"placeholder='PAN Card Number'onChange={(e)=>setPAN(e.target.value)}></input>
            <input type='text'name="IntialAmount"placeholder='Intial Amount'onChange={(e)=>setIntial(e.target.value)}></input>
            <input type='text'name="Transaction"placeholder='Transaction ID'onChange={(e)=>setTrans(e.target.value)}></input>
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default SavingsAccount