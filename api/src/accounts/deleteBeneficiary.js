const db = require("../../models");

async function DeleteBeneficiary(req, res) {
    const request = req.query;
    if (request && request.id) {
        db.Beneficiary.destroy({
            where: { id: request.id}
        }).then(async (data) => {
            if (data) {
                res.send({ message: "Success", status: true });
            } else {
                res.send({ message: "Failed", status: true });
            }
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while deleting the Beneficiary."
            });
        });
    } else {
        res.status(500).send({
            message:"Enter Beneficiary id."
        });
    }
}


module.exports = DeleteBeneficiary;
