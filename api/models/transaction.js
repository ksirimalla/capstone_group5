module.exports = (sequelize, Sequelize) => {
  const Transaction = sequelize.define("transaction", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    fromAccountId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'accounts',
        key: 'accountId'
      }
    },
    toAccountId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'accounts',
        key: 'accountId'
      }
    },
    fromCustomerId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'customers',
        key: 'customerId'
      }
    },
    toCustomerId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'customers',
        key: 'customerId'
      }
    },
    balance: {
      type: Sequelize.DECIMAL(65, 2)
    },
    comments: {
      type: Sequelize.STRING
    },
  },{
    initialAutoIncrement: 1000,
  });

  return Transaction;
};