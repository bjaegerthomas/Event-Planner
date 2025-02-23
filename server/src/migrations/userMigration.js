// Migration script to create Users table
import { Sequelize } from 'sequelize';

export const up = async (queryInterface) => {
  await queryInterface.createTable('Users', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true // Unique identifier for each user
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true // Ensures email is unique
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false // Password must be provided
    },
    createdAt: Sequelize.DATE, // Timestamp for when the record is created
    updatedAt: Sequelize.DATE // Timestamp for last update
  });
};

export const down = async (queryInterface) => {
  await queryInterface.dropTable('Users'); // Drops Users table if rollback is needed
};