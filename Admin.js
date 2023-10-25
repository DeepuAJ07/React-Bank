import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'




function Admin() {
    const[user,setuser]=useState([{Email:"",Password:""}])
    
    const Navigate=useNavigate()

const changefn=(e)=>{
  setuser({...user,[e.target.name]:e.target.value})
}

    const subfn=(e)=>{
e.preventDefault()
if(user.Email==="deepuaj@gmail.com"&&user.Password==="deepudeepu"){

Navigate("/Loan")
}else{
  alert('Invalid User')
}

    }

    return (
   
    <div className='AcntPage'>
        <form onSubmit={subfn}>

        <label>User Email</label><input type='email'name='Email'placeholder='Enter the Email'onChange={changefn}/>
       <label>Password</label><input type='password'placeholder='Password'name='Password'onChange={changefn}></input>
       <button type='submit'>Submit</button>
        </form>
    </div>
  )

}
      
    
  

export default Admin