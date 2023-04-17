const db = require("../../models");
const { QueryTypes } = require('sequelize');

async function GetCustomerBeneficiaryList(req, res) {
    const request = req.query;
    if (request && request.id) {
        const query = `
        select b.id, b.accountId,b.customerId,a.balance, a_t.name, c.firstName, c.lastName, c.email from beneficiaries as b 
        inner join accounts as a on b.accountId = a.accountId 
        inner join accounttypes as a_t on a_t.accountId = a.accountType 
        inner join customers as c on c.customerId = b.customerId 
        where b.customerId = ${request.id};
        `;
        db.sequelize.query(query, { type: QueryTypes.SELECT, raw: true }).then(data => {
            if (data) {
                res.send(data);
            } else {
                throw new Error("Beneficiaries Not Found");
            }
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retriving the Beneficiaries."
            });
        });
    } else {
        res.status(500).send({
            message:
                "Invalid Customer Id"
        });
    }
}

module.exports = GetCustomerBeneficiaryList;
