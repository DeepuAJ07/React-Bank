import React, { useState } from "react";
import Services from "./Services";
import './Home2.css';
import { Link } from "react-router-dom";
import Main from "./Main";

function Home2() {

  return (
    <div className="HomePage2">
      <nav class="navbar navbar-expand-lg bg-body-tertiary"id="navbar2">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/About">
            About
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Balance">
                  Balance
                </Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Withdrawl">
                  Withdrawl
                </Link>
                </li>

                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Deposit
                ">
                 Deposit
                </Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Transaction">
                 Transaction
                </Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/LoanApply">
                  Loan Apply
                </Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/LoanStatus">
                  Loan Status
                </Link>
                </li>
                
              
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Home1">
                  Logout
                </Link>
                </li>
              
              
              
               
              
              

             
             
             
             

              
            
             
             
            </ul>
          </div>
        </div>
      </nav>
 
    </div>
  );
}

export default Home2;
