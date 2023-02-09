var validateJwt = require("../config/jwt.handler");
const db = require("../../models");
const Customer = db.Customer;

async function Login(req, res) {
    const request = req.body;
    console.log(request)
    var query = { userName: request.userName, password: request.password };
    Customer.findOne({
        where: query
    }).then(data => {
        if (data) {
            data = data.toJSON();
            validateJwt.createToken({ userName: data.userName, customerId: data.customerId, role: data.role }, (token) => {
                res.json({ status: true, data: { userName: data.userName, customerId: data.customerId, role: data.role, accessToken: token } });
            })
        }else{
            res.json({ status: false, data: null, message: "User not Found" });
        }
    }).catch(err => {
        res.json({ status: false, data: null, message: err.message || "User not Found" });
    });
};

module.exports = Login;
