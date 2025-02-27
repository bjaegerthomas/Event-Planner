// Defines the Event model for database storage
import { DataTypes } from 'sequelize';
import sequelize from './database.js';

const Event = sequelize.define('Event', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true // Unique identifier for each event
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false // Event must have a title
  },
  description: {
    type: DataTypes.TEXT // Optional event description
  },
  createdBy: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Users', // References the Users table
      key: 'id'
    }
  }
});

export default Event;