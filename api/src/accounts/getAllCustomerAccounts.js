const db = require("../../models");
const { QueryTypes } = require('sequelize');

async function GetAllCustomerAccounts(req, res) {
    const query = `select a.accountId,a.customerId,a.accountType,a.balance, a_t.name, c.firstName, c.lastName from accounts as a 
        inner join accounttypes as a_t on a_t.accountId = a.accountType 
        inner join customers as c on a.customerId= c.customerId;`;
        console.log(query)
    db.sequelize.query(query, { type: QueryTypes.SELECT, raw: true }).then(data => {
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
}

module.exports = GetAllCustomerAccounts;
