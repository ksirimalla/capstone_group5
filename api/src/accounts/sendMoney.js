const db = require("../../models");

async function SendMoney(req, res) {
    const request = req.body;
    const validator = checkValidations(request);
    if (validator.status) {
        const fromAccount = await db.Accounts.findOne({
            where: { accountId: request.accountId }
        });
        const transferAmount = parseFloat(request.amount);

        if (fromAccount && transferAmount < fromAccount.balance) {
            const beneficiary = await db.Beneficiary.findOne({
                where: { id: request.beneficiary }
            });
            const toAccount = await db.Accounts.findOne({
                where: { accountId: beneficiary.accountId }
            });
            const fromAccountId = request.accountId;
            const toAccountId = beneficiary.accountId;
            const fromBalance = Number(fromAccount.balance) - transferAmount;
            const toBalance = Number(toAccount.balance) + transferAmount;
            console.log(fromBalance, toBalance)
            await db.Accounts.update({ balance: fromBalance }, { where: { accountId: fromAccountId } });
            await db.Accounts.update({ balance: toBalance }, { where: { accountId: toAccountId } });
            await db.Transaction.create({
                fromAccountId: fromAccountId,
                toAccountId: toAccountId,
                fromCustomerId: fromAccount.customerId,
                toCustomerId: toAccount.customerId,
                balance: transferAmount,
                comments: request.comments,
            })
            res.send({ status: true, balance: fromAccount.balance })
        } else {
            res.send({ status: false, message: "Insuffcient balance in the account" })
        }

        /*
        AccountType.update({ description: request.description }, {
            where: {
                accountId: request.accountId
            }
        }).then(data => {
            if (data && data.length && data[0] > 0) {
                res.send({
                    status: true,
                    message: " Updated Successfully",
                });
            } else {
                throw new Error("AccountType Not Found");
            }
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retriving the AccountType."
            });
        });
        */
    } else {
        res.status(500).send({
            status: false,
            message: validator.message,
            data: null,
        });
    }
}

function checkValidations(request) {
    let obj = { status: true, message: "" };
    if (!request.beneficiary) {
        obj = { status: false, message: "Please select Beneficiary" };
    } else if (!request.accountId) {
        obj = { status: false, message: "Please select accountId" };
    } else if (!request.amount) {
        obj = { status: false, message: "Please enter amount" };
    }
    return obj;
}


module.exports = SendMoney;
