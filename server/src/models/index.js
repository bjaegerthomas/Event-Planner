import { Sequelize } from 'sequelize';
import configData from '../config/config.js';
import User from './User.js';
import Event from './Event.js';

const config = configData[process.env.NODE_ENV || 'development'];
const sequelize = new Sequelize(config.database, config.username, config.password, { host: config.host, dialect: config.dialect });

// Define relationships
User.hasMany(Event, { foreignKey: 'createdBy', onDelete: 'CASCADE' });
Event.belongsTo(User, { foreignKey: 'createdBy', onDelete: 'CASCADE' });

const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('✅ Database synchronized successfully.');
  } catch (error) {
    console.error('❌ Error syncing database:', error);
  }
};

export { sequelize, User, Event, syncDatabase };
