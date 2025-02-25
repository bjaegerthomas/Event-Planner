import { Sequelize } from 'sequelize';

export const up = async (queryInterface) => {
  await queryInterface.createTable('Events', {
    id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true },
    title: { type: Sequelize.STRING, allowNull: false },
    description: { type: Sequelize.TEXT, allowNull: false },
    date: { type: Sequelize.STRING, allowNull: false },
    location: { type: Sequelize.STRING, allowNull: false },
    createdBy: { 
      type: Sequelize.UUID, 
      allowNull: false,
      references: { model: 'Users', key: 'id' },
    },
    createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
    updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
  });
};

export const down = async (queryInterface) => {
  await queryInterface.dropTable('Events');
};
