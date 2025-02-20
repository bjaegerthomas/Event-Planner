const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { v4: uuidv4 } = require('uuid');

const Rsvp = sequelize.define(
  'Rsvp',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Events', // Use table name as a string to avoid circular dependency
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    guest_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    rsvp_link: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      defaultValue: () => `http://yourfrontend.com/rsvp/${uuidv4()}`, // Generates a unique RSVP link
    },
    status: {
      type: DataTypes.ENUM('YES', 'NO', 'PENDING'),
      defaultValue: 'PENDING',
    },
    rsvp_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
    tableName: 'Rsvps', // Ensures Sequelize correctly maps table names
  }
);

module.exports = Rsvp;
