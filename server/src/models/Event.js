const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Event = sequelize.define(
  'Event',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    event_title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    event_description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users', // Use table name as a string to prevent circular dependency
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    date_updated: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
    tableName: 'Events', // Explicitly defining table name
  }
);

module.exports = Event;
