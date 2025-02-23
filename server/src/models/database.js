// Establish a connection to the PostgreSQL database using Sequelize
import { Sequelize } from 'sequelize';
import configData from '../config/config.js';

const config = configData[process.env.NODE_ENV || 'development'];
const sequelize = new Sequelize('event_planner_db', config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

export default sequelize;
