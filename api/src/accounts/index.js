var GetCustomerAccount = require("./getCustomerAccounts");
var GetAllCustomerAccounts = require("./getAllCustomerAccounts");
var GetCustomerAccountDetail = require("./getCustomerAccountDetail");

const CustomerAccountRoutes = [
  {
    path: "/getCustomerAccounts",
    method: "get",
    callback: GetCustomerAccount,
    guard:false
  },
  {
    path: "/getAllCustomerAccounts",
    method: "get",
    callback: GetAllCustomerAccounts,
    guard:false
  },
  {
    path: "/getAccountDetail",
    method: "get",
    callback: GetCustomerAccountDetail,
    guard:false
  }
];

module.exports = CustomerAccountRoutes;
