module.exports = (sequelize, Sequelize) => {
    const AccountType = sequelize.define("accountType", {
      accountId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      rateOfInterest: {
        type: Sequelize.DECIMAL(3,2)
      },
      minimumBalance: {
        type: Sequelize.DECIMAL(10,2)
      },
    },{
      initialAutoIncrement: 1000,
    });
  
    return AccountType;
  };