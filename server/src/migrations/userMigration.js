import { Sequelize } from 'sequelize';

export const up = async (queryInterface) => {
  await queryInterface.createTable('Users', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING, // Added new column
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    username: {
      type: Sequelize.STRING, // Added new column
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  });
};

export const down = async (queryInterface) => {
  await queryInterface.dropTable('Users');
};
