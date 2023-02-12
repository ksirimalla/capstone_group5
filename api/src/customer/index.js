var CreateCustomer = require("./createCustomer");
var Login = require("./login");
var CustomerList = require("./customerList");
var ViewCustomer = require("./viewCustomer");
var UpdateCustomer = require("./updateCustomer");

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
  {
    path: "/getCustomer",
    method: "get",
    callback: ViewCustomer,
    guard:false,
  },
  {
    path: "/updateCustomer",
    method: "put",
    callback: UpdateCustomer,
    guard:false,
  },
];

module.exports = CustomerRoutes;
