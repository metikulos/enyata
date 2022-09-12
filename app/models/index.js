const config = require("../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: 0,
    port: config.port,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    },
  }
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.incidents = require("../models/incident.model")(sequelize, Sequelize)

module.exports = db;