var GetCustomerAccount = require("./getCustomerAccounts");

const CustomerAccountRoutes = [
  {
    path: "/getCustomerAccounts",
    method: "get",
    callback: GetCustomerAccount,
    guard:false
  }
];

module.exports = CustomerAccountRoutes;
