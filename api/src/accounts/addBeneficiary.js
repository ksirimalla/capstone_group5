const db = require("../../models");

async function AddBeneficiary(req, res) {
    const request = req.body;
    const validator = checkValidations(request);
    if (validator.status) {
        db.Beneficiary.findOne({
            where: { accountId: request.accountId, customerId: request.customerId }
        }).then(async (data) => {
            if (data) {
                throw new Error("Beneficiary already exist");
            } else {
                db.Beneficiary.create({ accountId: request.accountId, customerId: request.customerId }).then(resp => {
                    if (resp) {
                        res.send({ message: "Success", status: true });
                    }
                })
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

module.exports = AddBeneficiary;
