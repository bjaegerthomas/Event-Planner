import { Sequelize } from 'sequelize';

export const up = async (queryInterface) => {
  await queryInterface.createTable('Events', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: Sequelize.TEXT,
    date: {
      type: Sequelize.STRING, // Added new column
      allowNull: false
    },
    location: {
      type: Sequelize.STRING, // Added new column
      allowNull: false
    },
    createdBy: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  });
};

export const down = async (queryInterface) => {
  await queryInterface.dropTable('Events');
};
