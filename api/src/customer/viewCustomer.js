const db = require("../../models");
const Customer = db.Customer;

async function ViewCustomer(req, res) {
    const request = req.query;
    if (request && request.id) {
        Customer.findOne({
            where: { role: "Customer", customerId: request.id },
            attributes: { exclude: ['password', 'userName', 'role'] }
        }).then(data => {
            if (data) {
                res.send(data);
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
            message:
                "Invalid Customer Id"
        });
    }
}

module.exports = ViewCustomer;
