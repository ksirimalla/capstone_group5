module.exports = {
    HOST: "database-capstoneg5.culpvholjumc.us-east-2.rds.amazonaws.com",
    USER: "capstoneAdmin",
    PASSWORD: "Kranthi435",
    DB: "branchlessBank",
    PORT:"3306",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };