const db = require("../../models");

async function AddAccount(req, res) {
    const request = req.body;
    const validator = checkValidations(request);
    if (validator.status) {
        const account = await db.Accounts.findOne({ where: { accountType: request.accountId, customerId: request.customerId } });
        const accountType = await db.AccountType.findOne({ where: { accountId: request.accountId } });
        if (!account) {
            await db.Accounts.create({
                customerId: request.customerId,
                accountType: request.accountId,
                balance: accountType.minimumBalance
            })
            res.send({ status: true });
        } else {
            res.status(500).send({
                message: "Account already exist for the customer"
            });
        }
    } else {
        res.status(500).send({
            message:
                validator.message
        });
    }
}

function checkValidations(request) {
    let obj = { status: true, message: "" };
    if (!request.customerId) {
        obj = { status: false, message: "Please enter customerId" };
    } else if (!request.accountId) {
        obj = { status: false, message: "Please enter accountId" };
    }

    return obj;
}

module.exports = AddAccount;
