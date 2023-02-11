var CreateCustomer = require("./createCustomer");
var Login = require("./login");
var CustomerList = require("./customerList");

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
  {
    path: "/customerList",
    method: "post",
    callback: CustomerList,
    guard:false,
  },
];

module.exports = CustomerRoutes;
