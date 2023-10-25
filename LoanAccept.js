import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import './LoanAccept.css'

function LoanAccept() {
  const [details,setdetails]=useState({C_id:""})
  const [loan, setloan] = useState([]);
  const [Email, setEmail] = useState("");
  const[showtool,setshowtool]=useState(false)





 
  // useEffect(() => {
  //   axios
  //     .post("http://localhost:4500/LoanView")
  //     .then((View) => {
  //       console.log(View);
       

 
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(()=>{
    axios.post("http://localhost:4500/LoanView").then((View)=>{
    console.log(View);
    setloan(View.data);;
    }).catch((Error)=>{
      console.log(Error,"Error");
    })
  },[])


  // const Accept = (id) => {
  //   // console.log(id);
  //   setEmail(id);
  // };

 

  const subfn = (e) => {
    e.preventDefault();
    let LoanAccept = {
      Email: Email,
    };

    axios
      .post("http://localhost:4500/LoanDetails", LoanAccept)
      .then((Accept) => {
      console.log(Accept); 
     setdetails(Accept.data);
   
   

      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Acceptfn=()=>{
setEmail(details.Email)
let AcceptLoan={
  Email:Email
}
    axios.post('http://localhost:4500/AcceptLoan',AcceptLoan).then((AcceptLoan)=>{
      console.log(AcceptLoan.data.data);
if(AcceptLoan.data.data===null){
  alert('No new Request')
}
else{
  alert('Loan Accepted')
}
if(AcceptLoan.data.Status===200)window.location.reload(false)
    }).catch((Error)=>{
      console.log(Error,'Error');
    })
  }

  const DeleteFn = ()=>{
    setEmail(details.Email)
    let DeleteReq={
      Email:Email
    }
    axios.post("http://localhost:4500/Reject",DeleteReq).then((Rejected)=>{
      console.log(Rejected);
    if(Rejected.data.Status===200)window.location.reload(false)
     alert('Loan Rejected');
    }).catch((error)=>{
      console.log('Error',error);
    })
  }

  const ViewDetails=(e)=>{
    setshowtool(true)
    setEmail(e.Email)
  }
  const HideDetails=()=>{
    setshowtool(false)
  }
  
  return (
  
      

<div>

<form onSubmit={subfn}>
  
<div> 
 

    </div>
{loan.filter((b)=>b.eligibility===false).map((e)=>{
  return(
    <div>
      <h2>{e.Email}</h2>
      <h2>{e.LoanType}</h2>
      <h2>{e.Amount}</h2>
    <button   type="submit"onClick={()=>{setEmail(e.Email)}}>Details</button>
    </div>
  )
})}
</form>
<div  className="details">
  Name:<h4 >{details.C_id.FirstName} {details.C_id.LastName}</h4>
 PAN: <h4>{details.C_id.PANNumber}</h4>
  Balance:<h4>{details.C_id.Amount}</h4>
  <button onClick={Acceptfn}>Accept</button> <button onClick={DeleteFn}>Reject</button>
</div>

</div>

  )
}

export default LoanAccept;
