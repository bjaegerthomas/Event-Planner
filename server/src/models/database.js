import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

console.log(process.env);
// Validate required environment variables

// Initialize Sequelize instance
const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
      process.env.DB_NAME || "",
      process.env.DB_USER || "",
      process.env.DB_PASSWORD || "",
      {
        host: process.env.DB_HOST || "localhost",
        dialect: "postgres",
        logging: false, // Disable logging (optional)
      }
    );

export default sequelize;
