import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Check if essential database environment variables are set
if (!process.env.DB_USER || !process.env.DB_PASS || !process.env.DB_HOST) {
  throw new Error("Missing required database environment variables");
}

// Define database configurations for different environments
const configData = {
  development: {
    username: process.env.DB_USER, // PostgreSQL username
    password: process.env.DB_PASS, // PostgreSQL password
    database: process.env.DB_NAME || "event_planner_db", // Default database name
    host: process.env.DB_HOST, // Database host (e.g., localhost)
    dialect: "postgres", // Specify PostgreSQL as the database dialect
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME || "event_planner_db",
    host: process.env.DB_HOST,
    dialect: "postgres",
  },
};

// Export the configuration object as the default export
export default configData;
