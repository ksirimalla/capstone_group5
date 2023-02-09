var CreateCustomer = require("./createCustomer");

const CustomerRoutes = [
  {
    path: "/register",
    method: "post",
    callback: CreateCustomer.UserRegister,
    guard:false
  }
];

module.exports = CustomerRoutes;
