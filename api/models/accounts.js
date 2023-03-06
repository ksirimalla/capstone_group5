module.exports = (sequelize, Sequelize) => {
  const AccountType = sequelize.define("accounts", {
    accountId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    customerId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'customers',
        key: 'customerId'
      }
    },
    accountType: {
      type: Sequelize.INTEGER,
      references: {
        model: 'accounttypes',
        key: 'accountId'
      }
    },
    balance: {
      type: Sequelize.DECIMAL(65, 2)
    },
  },{
    initialAutoIncrement: 1000,
  });

  return AccountType;
};