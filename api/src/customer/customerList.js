const db = require("../../models");
const Customer = db.Customer;

async function CustomerList(req, res) {
    const request = req.body;
    Customer.findAll({
        where: { role: "Customer" },
        attributes: ['firstName', 'lastName', 'customerId', 'phoneNumber', 'email']
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retriving the Customer."
        });
    });
}

module.exports = CustomerList;
