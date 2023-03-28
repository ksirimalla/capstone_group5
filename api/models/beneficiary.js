module.exports = (sequelize, Sequelize) => {
  const Beneficiary = sequelize.define("beneficiary", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    accountId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'accounts',
        key: 'accountId'
      }
    },
    customerId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'customers',
        key: 'customerId'
      }
    },
  },{
    initialAutoIncrement: 1000,
  });

  return Beneficiary;
};