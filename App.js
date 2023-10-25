import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Main from "./Main";
import Home1 from "./Home1";
import Account from "./Account";
import Services from "./Services";
import Registration from "./Registration";
import Footer2 from "./Footer2";
import Login from "./Login";
import { BrowserRouter, Link, Route, Routes} from "react-router-dom";
import About from "./About";
import Home2 from "./Home2";
import SavingsAccount from "./SavingsAccount";
import Account2 from "./Account2";
import Balance from "./Balance";
import Admin from "./Admin/Admin";
import AdminIcon from "./Admin/AdminIcon";
import Loan from "./Admin/Loan";
import CustomerDetails from "./Admin/CustomerDetails";
import AccountDetails from "./Admin/AccountDetails";
import LoaApply from "./LoaApply";
import LoanAccept from "./Admin/LoanAccept";
import LoanStatus from "./LoanStatus";
import Search from "./Search";
import Todo from './Todo'

import Transaction from "./Transaction";

function App() {
const[status,setstatus]=useState(false)



  return (
    <BrowserRouter>
      <div className="BankPage">
       
<Home value={status}/>

        <Routes>
          <Route path="/Search" element={<Search/>}/>
          <Route  path="/About" element={<About />} />
          <Route path="/Deposit" element={<Account />} />
          <Route path="/Withdrawl" element={<Account2 />} />``
          <Route path="/Balance" element={<Balance />} />
          <Route path="/Services" element={<Services />} />
         <Route path='/'element={<Main/>}/>
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home2" element={<Home2 />} />
          <Route path="/SavingsAccount" element={<SavingsAccount />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Loan" element={<Loan />} />
          <Route path="/LoanAccept"element={<LoanAccept/>}/>
          <Route path="/SavingsAccount" element={<Services />} />
          <Route path="/CustomerDetails" element={<CustomerDetails />} />
          <Route path="/AccountDetails" element={<AccountDetails />} />
          <Route path="/LoanApply"element={<LoaApply/>}/>
          <Route path='/LoanStatus'element={<LoanStatus/>}/>
          <Route path='/Transaction'element={<Transaction/>}/>
        </Routes>
     
     
        <Footer2 />

        <AdminIcon />
      </div>
    </BrowserRouter>
  );
}

export default App;
