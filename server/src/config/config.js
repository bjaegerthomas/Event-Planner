  import dotenv from 'dotenv';

dotenv.config();

if (!process.env.DB_USER || !process.env.DB_PASS || !process.env.DB_HOST) {
  throw new Error('Missing required database environment variables');
}

export default {
  development: {
    username: process.env.DB_USER, // PostgreSQL username
    password: process.env.DB_PASS, // PostgreSQL password
    database: process.env.DB_NAME || 'event_planner_db',
    host: process.env.DB_HOST, // Database host (e.g., localhost or cloud provider)
    dialect: 'postgres', // Database dialect (PostgreSQL in this case)
  },
};