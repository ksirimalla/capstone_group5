const db = require("../../models");
const AccountType = db.AccountType;

async function UpdateAccountType(req, res) {
    const request = req.body;
    const validator = checkValidations(request);
    if (validator.status) {
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
    if (!request.description) {
        obj = { status: false, message: "Please enter Description" };
    }

    return obj;
}


module.exports = UpdateAccountType;
