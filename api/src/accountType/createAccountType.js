const db = require("../../models");
const AccountType = db.AccountType;

async function CreateAccountType(req, res) {
    const request = req.body;
    console.log(request)
    const validator = checkValidations(request);
    if (validator.status) {
        request["code"] = String(request.name).replace(/ /g, '-').toUpperCase();
        const list = await AccountType.findAll({ where: { code: request.code } });
        if (list && list.length > 0) {
            res.json({
                status: false,
                message: "Acccount already exist with this name ",
                data: null,
            });
        } else {
            AccountType.create(request)
                .then(data => {
                    res.send(data);
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while creating the Account."
                    });
                });
        }
    } else {
        res.json({
            status: false,
            message: validator.message,
            data: null,
        });
    }
}

function checkValidations(request) {
    let obj = { status: true, message: "" };
    if (!request.name) {
        obj = { status: false, message: "Please enter Account Name" };
    } else if (!request.description) {
        obj = { status: false, message: "Please enter Description" };
    } else if (!request.rateOfInterest) {
        obj = { status: false, message: "Please enter Rate of Interest" };
    } else if (typeof request.minimumBalance != "number") {
        obj = { status: false, message: "Please enter Minimum Balance" };
    }

    return obj;
}

module.exports = CreateAccountType
