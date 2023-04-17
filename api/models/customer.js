module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customer", {
      customerId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      dateOfBirth: {
        type: Sequelize.DATE
      },
      role: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      userName: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      addressLine1: {
        type: Sequelize.STRING
      },
      addressLine2: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      postalCode: {
        type: Sequelize.STRING
      },
      userImage: {
        type: Sequelize.STRING
      },
      idProof: {
        type: Sequelize.STRING
      },
      idProofValue: {
        type: Sequelize.STRING
      }
    },{
      initialAutoIncrement: 1000,
    });
  
    return Customer;
  };