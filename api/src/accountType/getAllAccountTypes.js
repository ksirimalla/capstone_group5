const db = require("../../models");
const AccountType = db.AccountType;

async function GetAccountTypes(req, res) {

    AccountType.findAll().then(data => {
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

module.exports = GetAccountTypes;
