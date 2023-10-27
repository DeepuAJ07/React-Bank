var express = require("express");
var route = express.Router();
var userController = require("./users/userController")
var DepositController = require("./users/DepositController")
let WithdrawlController=require("./users/WithdrawlController")
let BalanceController=require("./users/BalanceController")
let AdminController=require("./users/AdminController")
let LoanController=require("./users/LoanController")
let LoanAccept=require("./Loan/LoanAccept")
let AcceptLoan=require("./Loan/RequestAccept")
let LoanView=require("./Loan/LoanView")
let loanStatus=require("./Loan/LoanStatus")
let Transaction = require('./users/TransactionController')
let RequestReject = require('./Loan/RequestReject')
let loanDetails=require('./Loan/LoanDetails')
let AccountController = require("./Account/AccountController")
route.post("/test",userController.addUser);
route.post("/Login",userController.Login)
route.post('/Deposit',DepositController.Deposit)
route.post('/Withdrawl',WithdrawlController.Withdrawl)
route.post('/Balance',BalanceController.Balance)
route.post("/Admin",AdminController.Admin)
route.post("/Loan",LoanController.Loan)
route.post("/Accept",LoanAccept.applyLoan)
route.post("/AcceptLoan",AcceptLoan.AcceptLoan)
route.post("/LoanView",LoanView.LoanView)
route.post("/LoanStatus",loanStatus.loanStatus)
route.post('/Trans',Transaction.Transaction)
route.post('/Reject',RequestReject.rejectLoan)
route.post('/LoanDetails',loanDetails.loanDetails)
route.post('/Bal/:Customerid',AccountController.Balan)

module.exports= route
