var CreateCustomer = require("./createCustomer");
var Login = require("./login");

const CustomerRoutes = [
  {
    path: "/register",
    method: "post",
    callback: CreateCustomer.UserRegister,
    guard:false
  },
  {
    path: "/login",
    method: "post",
    callback: Login,
    guard:false,
  },
];

module.exports = CustomerRoutes;
