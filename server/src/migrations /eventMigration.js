// Migration script to create Events table
import { DataTypes } from "sequelize";

/** @param {import('sequelize').QueryInterface} queryInterface */
export const up = async (queryInterface) => {
  await queryInterface.createTable("Events", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true, // Unique identifier for each event
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false, // Event must have a title
    },
    description: DataTypes.TEXT, // Optional description field
    createdBy: {
      type: DataTypes.UUID, //added DataTypes to UUID
      allowNull: false,
      references: {
        model: "Users", // Foreign key referencing Users table
        key: "id",
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // Ensures createdAt is set automatically
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });
};

/** @param {import('sequelize').QueryInterface} queryInterface */
export const down = async (queryInterface) => {
  await queryInterface.dropTable("Events"); // Drops Events table if rollback is needed
};
