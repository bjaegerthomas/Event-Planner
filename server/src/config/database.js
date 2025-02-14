const { Sequelize } = require('sequelize');
require('dotenv').config(); // For loading environment variables

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: false, // Disable logging queries in the console
});

module.exports = sequelize;
