// Configuration file for Sequelize connection settings
// Loads database credentials from environment variables
export default {
    development: {
      username: process.env.DB_USER, // PostgreSQL username
      password: process.env.DB_PASS, // PostgreSQL password
      database: 'event_planner_db', // Name of the database
      host: process.env.DB_HOST, // Database host (e.g., localhost or cloud provider)
      dialect: 'postgres' // Database dialect (PostgreSQL in this case)
    }
  };