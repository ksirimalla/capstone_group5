const db = require("../../models");
const { Op } = require("sequelize");
const TODAY_START = new Date(new Date().setHours(0, 0, 0, 0));
const NOW = new Date();

async function GetAdminDashboard(req, res) {
    try{
    const customersCount = await db.Customer.count();
    const accountCount = await db.Accounts.count();
    const accountTypeCount = await db.AccountType.count();
    const transactionsCount = await db.Transaction.count({
        where: {
            createdAt: {
            [Op.gt]: TODAY_START,
            [Op.lt]: NOW
          }
        }
      });

    res.send({
        customers:customersCount,
        accountCount:accountCount,
        accountTypeCount:accountTypeCount,
        transactionsCount:transactionsCount
    });
}catch(e){
    console.log(e)
}
}

module.exports = GetAdminDashboard;
