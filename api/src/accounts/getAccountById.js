const db = require("../../models");

async function GetAccountById(req, res) {
    const request = req.query;
    if (request && request.id) {
        db.Accounts.findOne({
            where: { accountId: request.id }
        }).then(async (data) => {
            if (data) {
                db.Customer.findOne({
                    where: { role: "Customer", customerId: data.customerId },
                    attributes: ['firstName', 'lastName', 'customerId', 'phoneNumber', 'email']
                }).then(customer => {
                    if (customer) {
                        res.send({...customer.dataValues,accountId:request.id});
                    } else {
                        throw new Error("Customer Not Found");
                    }
                })
            } else {
                throw new Error("Account Not Found");
            }
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retriving the Account."
            });
        });
    } else {
        res.status(500).send({
            message:
                "Invalid Account Id"
        });
    }
}

module.exports = GetAccountById;
