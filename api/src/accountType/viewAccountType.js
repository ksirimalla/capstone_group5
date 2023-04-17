const db = require("../../models");
const AccountType = db.AccountType;

async function ViewAccountType(req, res) {
    const request = req.query;
    if (request && request.id) {
        AccountType.findOne({
            where: { accountId: request.id }
        }).then(data => {
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

module.exports = ViewAccountType;
