const db = require("../../models");
const { QueryTypes } = require('sequelize');

async function GetCustomerAccount(req, res) {
    const request = req.query;
    if (request && request.id) {
        const query = `select * from accounts as a inner join accounttypes as a_t on a_t.accountId = a.accountType where a.customerId = ${request.id}`;
        db.sequelize.query(query,{type: QueryTypes.SELECT,raw:true}).then(data => {
            if (data) {
                res.send(data);
            } else {
                throw new Error("AccountType Not Found");
            }
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retriving the AccountType."
            });
        });
    } else {
        res.status(500).send({
            message:
                "Invalid AccountType Id"
        });
    }
}

module.exports = GetCustomerAccount;
