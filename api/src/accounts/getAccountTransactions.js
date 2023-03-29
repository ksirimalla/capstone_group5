const db = require("../../models");
const { QueryTypes } = require('sequelize');

async function GetAccountTransactions(req, res) {
    const request = req.query;
    if (request && request.id) {
        const query = `
        select t.id, t.balance, t.comments, t.createdAt, c.firstName, c.lastName, c.email, IF(t.fromAccountId = ${request.id}, 'Debit', 'Credit') as type  from transactions as t
        inner join customers as c on c.customerId = t.toCustomerId 
        where t.fromAccountId = ${request.id} or t.toAccountId = ${request.id};
        `;
        db.sequelize.query(query, { type: QueryTypes.SELECT, raw: true }).then(data => {
            if (data) {
                res.send(data);
            } else {
                throw new Error("Transactions Not Found");
            }
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retriving the Transactions."
            });
        });
    } else {
        res.status(500).send({
            message:
                "Invalid Account Id"
        });
    }
}

module.exports = GetAccountTransactions;
