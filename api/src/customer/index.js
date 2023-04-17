var CreateCustomer = require("./createCustomer");
var Login = require("./login");
var CustomerList = require("./customerList");
var ViewCustomer = require("./viewCustomer");
var UpdateCustomer = require("./updateCustomer");
var GetAdminDashboard = require("./dashboard");

const CustomerRoutes = [
  {
    path: "/register",
    method: "post",
    callback: CreateCustomer.UserRegister,
    guard: false
  },
  {
    path: "/login",
    method: "post",
    callback: Login,
    guard: false,
  },
  {
    path: "/customerList",
    method: "post",
    callback: CustomerList,
    guard: false,
  },
  {
    path: "/getCustomer",
    method: "get",
    callback: ViewCustomer,
    guard: false,
  },
  {
    path: "/updateCustomer",
    method: "put",
    callback: UpdateCustomer,
    guard: false,
  },
  {
    path: "/getAdminDashboard",
    method: "get",
    callback: GetAdminDashboard,
    guard: false,
  }
];

module.exports = CustomerRoutes;
