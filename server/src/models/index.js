'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.js')[env]; // Using config.js instead of config.json
const db = {};

// Initialize Sequelize connection
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Dynamically import models from the current directory
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Import models explicitly
const User = require('./User');
const Event = require('./Event');
const Rsvp = require('./Rsvp');

db.User = User;
db.Event = Event;
db.Rsvp = Rsvp;

// Define Associations
User.hasMany(Event, { foreignKey: 'created_by', onDelete: 'CASCADE' });
Event.belongsTo(User, { foreignKey: 'created_by', onDelete: 'CASCADE' });

User.hasMany(Rsvp, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Event.hasMany(Rsvp, { foreignKey: 'event_id', onDelete: 'CASCADE' });

Rsvp.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Rsvp.belongsTo(Event, { foreignKey: 'event_id', onDelete: 'CASCADE' });

// Sync models with the database
const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true }); // Ensure tables are updated without losing data
    console.log('✅ Database synchronized successfully.');
  } catch (error) {
    console.error('❌ Error syncing database:', error);
  }
};

// Attach Sequelize and the sync function to the db object
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.syncDatabase = syncDatabase;

module.exports = db;
