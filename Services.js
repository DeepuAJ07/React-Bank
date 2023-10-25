import React, { useEffect, useState } from "react";
import "./Service.css";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
function Services() {
  
  const [card, setCard] = useState([
    {
      id: 1,
      a: "Balance",
      img: "https://www.iob.in/images/way-bank1.png",
      b:"Balance"
    },
    {
      id: 2,
      a: "Deposit",
      img: "https://www.iob.in/images/way-bank2.png",
      b:"Deposit"
    },
    { id: 3, a: "Loan Apply", img: "https://www.iob.in/images/way-bank3.png",
  b:'LoanApply' },
    {
      id: 4,
      a: "Withdrawl",
      img: "https://www.iob.in/images/way-bank4.png",
      b:'Withdrawl'
    },
    {
      id: 5,
      a: "About",
      img: "https://www.iob.in/images/Government-Schemes.png",
      b:'About'
    },
    {
      id: 6,
      a: "Transaction",
      img: "https://www.iob.in/images/current-account1.png",
      b:'Transaction'
    },
  ]);
  const[id,setId]=useState("")

  const Navigate = useNavigate();
  useEffect(() => {
   
   console.log(card.id);
  }, [card]);
  return (
    <div>
      <Helmet>
        <title>Bank-Services</title>
      </Helmet>

      <h1>Welcome</h1>
      <div class="text-center">
        <div class="row">
          {card.map((e) => {
            return (
              <div key={e.id} className="col ServicePage">
                <div class="card" style={{ width: "350px" }}>
                  <div className="card-body">
                    <h2 class="card-title">Fin Bank</h2>
                    <h6 class="card-subtitle mb-2 text-body-secondary">
                      {e.a}
                    </h6>
                    <img
                      src={e.img}
                      style={{ height: "100px", width: "100px" }}
                    />
                  

                    <Link to={`/${e.b}`}>{e.b}</Link>
                  </div> 
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
