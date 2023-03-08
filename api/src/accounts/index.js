var GetCustomerAccount = require("./getCustomerAccounts");
var GetAllCustomerAccounts = require("./getAllCustomerAccounts");

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
  }
];

module.exports = CustomerAccountRoutes;
