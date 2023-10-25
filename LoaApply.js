import axios from "axios";
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import Home2 from "./Home2";
// import "./LoanApply.css"

function LoaApply() {
 
  const [Email, setEmail] = useState("");
  const [LoanType, setLoanType] = useState("");
  const [Amount, setAmount] = useState(0);
  const Navigate = useNavigate()
  const Cus_Id=localStorage.getItem('C_id')

  const subfn = (e) => {
    e.preventDefault();
    const LoanApply = {
     Email: Email, LoanType: LoanType, Amount: Amount };

    axios
      .post(`http://localhost:4500/Accept`, LoanApply)
      .then((data) => {
        console.log(data);
        if(data.data.Status===200){
          alert("Loan Applied")
        }
        else{
          alert('Already Applied')
        }
    
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  return (
    <div>
      <Home2/>
      <form onSubmit={subfn}>
     
        <input required className="RegisIpt"
          type="email"
          placeholder="Enter your Email ID"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input className="RegisIpt"
          type="text"
          placeholder="Enter Loan Type"
          onChange={(e) => {
            setLoanType(e.target.value);
          }}
        ></input>
        <input required className="RegisIpt"
          type="number" min={10000} max={200000}
          placeholder="Enter the Amount"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        ></input>
        <button className="Regisbtn" type="submit">Apply for Loan</button><br></br><br></br>
        
      </form>
   
    </div>
  );
}

export default LoaApply;
