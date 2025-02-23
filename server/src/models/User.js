// Defines the User model for database storage
import { DataTypes } from 'sequelize';
import sequelize from './database.js';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true // Unique identifier for each user
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Ensures email is unique in the database
    validate: {
      isEmail: true // Ensures valid email format
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false // Stores hashed password for security
  }
});

export default User;