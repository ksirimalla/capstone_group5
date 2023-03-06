var CreateAccountType = require("./createAccountType");
var ViewAccountType = require("./viewAccountType");
var GetAccountTypes = require("./getAllAccountTypes");
var UpdateAccountType = require("./updateAccountType");

const AccountTypeRoutes = [
  {
    path: "/createAccountType",
    method: "post",
    callback: CreateAccountType,
    guard:false
  },
  {
    path: "/getAccountType",
    method: "get",
    callback: ViewAccountType,
    guard:false
  },
  {
    path: "/getAllAccountType",
    method: "get",
    callback: GetAccountTypes,
    guard:false
  },
  {
    path: "/updateAccountType",
    method: "put",
    callback: UpdateAccountType,
    guard:false
  },
];

module.exports = AccountTypeRoutes;
