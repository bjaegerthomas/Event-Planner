// Migration script to create Events table
import { Sequelize } from 'sequelize';

export const up = async (queryInterface) => {
  await queryInterface.createTable('Events', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true // Unique identifier for each event
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false // Event must have a title
    },
    description: Sequelize.TEXT, // Optional description field
    createdBy: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'Users', // Foreign key referencing Users table
        key: 'id'
      }
    },
    createdAt: Sequelize.DATE, // Timestamp for when the event was created
    updatedAt: Sequelize.DATE // Timestamp for last update
  });
};

export const down = async (queryInterface) => {
  await queryInterface.dropTable('Events'); // Drops Events table if rollback is needed
};
