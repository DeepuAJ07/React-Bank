// import axios from 'axios';
// import React, { useState } from 'react'
// 
// import { Helmet } from 'react-helmet';
// import { useNavigate } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';

  
// function Registration() {
// //    const[FirstName,setFName]=useState("")
// //    const[LastName,setLName]=useState("")
// //    const[PANNumber,setPAN]=useState("")
// //    const[Contact,setContact]=useState()
// //    const[Email,setEmail]=useState("")
// //    const[Password,setPassword]=useState("")
// const[register,setregister]=useState({
//     FirstName:"",
//     LastName:"",
//     PANNumber:"",
//     Contact:"",
//     Email:"",
//     Password:""
// })
//  const Navigate=useNavigate()

//  const chfunc=(a)=>{
//     setregister({
//         ...register,[a.target.name]:a.target.value
//     })
//     console.log(register);

// }




// const subfn1=(e)=>{
// e.preventDefault()
// console.log("Submitted");
// axios.post("http://localhost:4500/test",register)

// .then((res)=>{
//     console.log(res,"Sucess");
//     Navigate('/Login')
// })
// .catch((err)=>{
//     console.log(err,"Error");
// })

// // console.log(regData);
// }


//  return (
//     <div className='Registrtn'>
//         <Helmet>
//             <title>Bank-Registration</title>
//         </Helmet>
//         <div>
//             {/* <form onSubmit={subfn1}> */}

//                 <h1>Registration Form</h1>
//                 <label className='regi-label'>First Name:</label> <input className="RegisIpt"type="text"name="FirstName" value={register.FirstName}  onChange={chfunc}/><br></br>
//                 <label className='regi-label'>Last Name:</label> <input className="RegisIpt"type="text"name="LastName"value={register.LastName}  onChange={chfunc}/><br></br>
//                 <label className='regi-label'>PAN:</label><input className="RegisIpt"type='text'name="PANNumber" value={register.PANNumber} onChange={chfunc}/><br></br>
//                 <label className='regi-label'>Contact:</label><input className="RegisIpt"type="number"name="Contact"value={register.Contact}  onChange={chfunc}/><br></br>
//                 <label className='regi-label'>Email:</label><input className="RegisIpt"type="email"name="Email"value={register.Email}  onChange={chfunc}/><br></br>
//                 <label className='regi-label'>Password:</label><input className="RegisIpt"type="password"name="Password"value={register.Password}  onChange={chfunc}/><br></br>
//                 <button type='button' onClick={subfn1}>Register</button>
// {/* /            </form> */}
//         </div>
//     </div>
//   )
// }

// export default Registration

import axios from 'axios';
 import React, { useState } from 'react'


 import { Helmet } from 'react-helmet';
 import { useNavigate } from 'react-router-dom';   
import "./Registration.css"

 
 function Registration() {
  const[C_id,setC_id]=useState("")
    const[FirstName,setFName]=useState("")
   const[LastName,setLName]=useState("")
    const[PANNumber,setPAN]=useState("")
    const[Amount,setAmount]=useState(0)
    const[Contact,setContact]=useState()
    const[Email,setEmail]=useState("")
   const[Password,setPassword]=useState("")
   const Navigate=useNavigate()

   const subfn1=(e)=>{
e.preventDefault()
let Register={
  C_id:C_id,
    FirstName:FirstName,
    LastName:LastName,
    PANNumber:PANNumber,
    Amount:Amount,
    Contact:Contact,
    Email:Email,
    Password:Password
}

axios.post("http://localhost:4500/test",Register).then((res)=>{
    console.log(res,"res");
    if(res.data.Status===200){
      alert('Registered')
      Navigate('/Login')
    }
    else{
      alert('Registration not completed')
    }
  
}).catch((err)=>{
    console.log(err);
})
   }
   return (
     <div className='Regisnew'>Registration
<form onSubmit={subfn1}>

<label >First Name:</label> <input type="text"name="FirstName" required='true'  onChange={(e)=>{setFName(e.target.value)}}/><br></br>
                <label  >Last Name:</label> <input type="text"name="LastName" required='true'  onChange={(e)=>{setLName(e.target.value)}}/><br></br>
                <label  >PAN:</label><input type='text'name="PANNumber"  required='true' onChange={(e)=>{setPAN(e.target.value)}}/><br></br>
                <label >Amount:</label><input type='number'name='Amount' required='true' onChange={(e)=>{setAmount(e.target.value)}}/><br></br>
                <label >Contact:</label><input type="tel"name="Contact" minLength={10}  required='true'  onChange={(e)=>{setContact(e.target.value)}}/><br></br>
                <label >Email:</label><input type="email"name="Email"  required='true'   onChange={(e)=>{setEmail(e.target.value)}}/><br></br>
                 <label >Password:</label><input type="password"name="Password"  required='true'   onChange={(e)=>{setPassword(e.target.value)}}/><br></br>
                 <button type='submit'>Register</button>
</form>
              
        
     </div>
   )
 }
 
 export default Registration