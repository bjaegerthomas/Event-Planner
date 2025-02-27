require("dotenv").config({ path: "../.env" }); // If inside the 'server' folder

console.log(process.env.SECRET_KEY);

const sequelize = require("../config/database"); // Import the Sequelize instance
const User = require("./UserLogin");
const User = require("./User"); // Import User model
const Event = require("./Event"); // Import Event model
const Rsvp = require("./Rsvp"); // Import Rsvp model

// Define Associations
User.hasMany(Event, { foreignKey: "created_by", onDelete: "CASCADE" });
Event.belongsTo(User, { foreignKey: "created_by", onDelete: "CASCADE" });

User.hasMany(Rsvp, { foreignKey: "user_id", onDelete: "CASCADE" });
Event.hasMany(Rsvp, { foreignKey: "event_id", onDelete: "CASCADE" });

Rsvp.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });
Rsvp.belongsTo(Event, { foreignKey: "event_id", onDelete: "CASCADE" });

// Sync models with the database (optional but useful)
const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true }); // Ensure tables are updated without losing data
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
};

module.exports = { sequelize, User, Event, Rsvp, syncDatabase };
