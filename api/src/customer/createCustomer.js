const db = require("../../models");
const Customer = db.Customer;
const Accounts = db.Accounts;
const AccountType = db.AccountType;

async function UserRegister(req, res) {
    const request = req.body;
    console.log(request)
    const validator = checkValidations(request);
    if (validator.status) {
        const list = await Customer.findAll({ where: { userName: request.userName } });
        if (list && list.length > 0) {
            res.json({
                status: false,
                message: "User already exist with this email ",
                data: null,
            });
        } else {
            const { accountId, ...body } = request;
            const account = await AccountType.findOne({ where: { accountId: accountId } });
            console.log(account)
            if (account) {
                Customer.create({ ...body, role: "Customer" })
                    .then(async (data) => {
                        Accounts.create({
                            customerId: data.customerId,
                            accountType: accountId,
                            balance: account.minimumBalance
                        })
                        res.send(data);
                    })
                    .catch(err => {
                        res.status(500).send({
                            message:
                                err.message || "Some error occurred while creating the Customer."
                        });
                    });
            } else {
                res.json({
                    status: false,
                    message: "Please select a valid account",
                    data: null,
                });
            }
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
    if (!request.firstName) {
        obj = { status: false, message: "Please enter First Name" };
    } else if (!request.lastName) {
        obj = { status: false, message: "Please enter Last Name" };
    } else if (!request.dateOfBirth) {
        obj = { status: false, message: "Please enter Date of Birth" };
    } else if (!request.phoneNumber) {
        obj = { status: false, message: "Please enter Phone Number" };
    } else if (!request.password) {
        obj = { status: false, message: "Please enter Password" };
    } else if (!request.email) {
        obj = { status: false, message: "Please enter Email" };
    } else if (!request.addressLine1) {
        obj = { status: false, message: "Please enter Address Line1" };
    } else if (!request.state) {
        obj = { status: false, message: "Please enter State" };
    } else if (!request.postalCode) {
        obj = { status: false, message: "Please enter Postal Code" };
    } else if (!request.country) {
        obj = { status: false, message: "Please enter Country" };
    } else if (!request.city) {
        obj = { status: false, message: "Please enter City" };
    } else if (!request.idProof) {
        obj = { status: false, message: "Please enter Id Proof" };
    } else if (!request.idProofValue) {
        obj = { status: false, message: "Please enter Id Proof Number" };
    } else if (!request.accountId) {
        obj = { status: false, message: "Please Select Account Type" };
    }

    return obj;
}

module.exports = {
    UserRegister: UserRegister
} 
