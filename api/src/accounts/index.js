var GetCustomerAccount = require("./getCustomerAccounts");
var GetAllCustomerAccounts = require("./getAllCustomerAccounts");
var GetCustomerAccountDetail = require("./getCustomerAccountDetail");
var GetAccountById = require("./getAccountById");
var AddBeneficiary = require("./addBeneficiary");
var GetCustomerBeneficiaryList = require("./getCustomerBeneficiaryList");
var DeleteBeneficiary = require("./deleteBeneficiary");
var SendMoney = require("./sendMoney");
var GetAccountTransactions = require("./getAccountTransactions");

const CustomerAccountRoutes = [
  {
    path: "/getCustomerAccounts",
    method: "get",
    callback: GetCustomerAccount,
    guard: false
  },
  {
    path: "/getAllCustomerAccounts",
    method: "get",
    callback: GetAllCustomerAccounts,
    guard: false
  },
  {
    path: "/getAccountDetail",
    method: "get",
    callback: GetCustomerAccountDetail,
    guard: false
  },
  {
    path: "/getAccountById",
    method: "get",
    callback: GetAccountById,
    guard: false
  },
  {
    path: "/addBeneficiary",
    method: "post",
    callback: AddBeneficiary,
    guard: false
  },
  {
    path: "/getCustomerBeneficiaryList",
    method: "get",
    callback: GetCustomerBeneficiaryList,
    guard: false
  },
  {
    path: "/deleteBeneficiary",
    method: "delete",
    callback: DeleteBeneficiary,
    guard: false
  },
  {
    path: "/sendMoney",
    method: "post",
    callback: SendMoney,
    guard: false
  },
  {
    path: "/getAccountTransactions",
    method: "get",
    callback: GetAccountTransactions,
    guard: false
  },
];

module.exports = CustomerAccountRoutes;
