var CustomerRoutes = require("./src/customer");
var AccountTypeRoutes = require("./src/accountType");
var CustomerAccountRoutes = require("./src/accounts");
var validateJwt = require("./src/config/jwt.handler");
var allRoutes = [...CustomerRoutes, ...AccountTypeRoutes, ...CustomerAccountRoutes];
var basePath = "/v1";

function GenerateRoutes(app) {
  allRoutes.map((row) => {
    app[row.method](basePath + row.path, function (req, res) {
       row.guard = false;
      if (row.guard) {
        validateJwt.verifyToken(req.headers.authorization, (data) => {
            if(data){
                row.callback(req, res, data);
            }else{
                res.status(401).json({status:false,message:'Session Expired'})
            }
        });
      } else {
        row.callback(req, res);
      }
    });
  });
}

module.exports = GenerateRoutes;
