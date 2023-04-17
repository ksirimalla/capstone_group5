const db = require("../../models");
const Customer = db.Customer;

async function UpdateCustomer(req, res) {
    const request = req.body;
    const validator = checkValidations(request);
    if (validator.status) {
        Customer.update(request, {
            where: {
                customerId: request.customerId
            }
        }).then(data => {
            if (data && data.length && data[0] > 0) {
                res.send({
                    status: true,
                    message: " Updated Successfully",
                });
            } else {
                throw new Error("Customer Not Found");
            }
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retriving the Customer."
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
    if (!request.firstName) {
        obj = { status: false, message: "Please enter First Name" };
    } else if (!request.lastName) {
        obj = { status: false, message: "Please enter Last Name" };
    } else if (!request.dateOfBirth) {
        obj = { status: false, message: "Please enter Date of Birth" };
    } else if (!request.phoneNumber) {
        obj = { status: false, message: "Please enter Phone Number" };
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
    }

    return obj;
}


module.exports = UpdateCustomer;
