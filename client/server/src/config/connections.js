import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Database configuration object
const databaseConfig = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME || "event_planner_db",
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Required for certain cloud-hosted databases
      },
    },
  },
};

// Initialize Sequelize instance
const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL, {
      dialect: "postgres",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    })
  : new Sequelize(
      process.env.DB_NAME || "default_db_name",
      process.env.DB_USER || "default_db_user",
      process.env.DB_PASSWORD || "default_db_pw",
      {
        host: process.env.DB_HOST || "localhost",
        dialect: "postgres",
      }
    );

// Export both configurations and Sequelize instance
export { databaseConfig, sequelize };

/*import { Sequelize } from "sequelize";


const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
      process.env.DB_NAME || "default_db_name",
      process.env.DB_USER || "default_db_user",
      process.env.DB_PASSWORD || "default_db_pw",
      {
        host: process.env.DB_HOST || "localhost",
        dialect: "postgres",
      }
    );

//  ES module export
export default sequelize;
*/

/* 
const { Sequelize } = require("sequelize");

let sequelize;
// If the environment variable DB_URL is set, use it to connect to the database.
if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME || "default_db_name",
    process.env.DB_USER || "default_db_user",
    process.env.DB_PW || "default_db_pw",
    { host: "localhost", dialect: "postgres" }
  );
}

module.exports = sequelize;
// Export the connection
*/
