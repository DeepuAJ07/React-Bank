import axios from "axios";
import React, { useState } from "react";
import './LoanAccept.css'

function CustomerDetails() {
  const [customer, setCustomer] = useState([{}]);
  const subfn = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4500/Admin")
      .then((Admin) => {
        console.log(Admin);
        setCustomer(Admin.data);
        console.log(customer);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="Customer">
      <div>
        
         
            <table>
             

              {customer.map((e)=>{
                return(
                  <tbody>
                    <tr>
                    <td>{e.FirstName}</td>
                    <td>{e.LastName}</td>
                    <td>{e.PANNumber}</td>
                    <td>{e.Email}</td>
                    <td>{e.Contact}</td>
                    </tr>
                   
                  </tbody>
                )
              })}
           
            </table>
        
        
        
        <form onSubmit={subfn}>
          <button type="Submit">Customer Details</button>
        </form>
      </div>
    </div>
  );
}

export default CustomerDetails;
