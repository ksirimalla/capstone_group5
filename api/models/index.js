const dbConfig = require("./config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Customer = require("./customer")(sequelize, Sequelize);
db.AccountType = require("./accountType")(sequelize, Sequelize);
db.Accounts = require("./accounts")(sequelize, Sequelize);
db.Beneficiary = require("./beneficiary")(sequelize, Sequelize);
db.Transaction = require("./transaction")(sequelize, Sequelize);

module.exports = db;