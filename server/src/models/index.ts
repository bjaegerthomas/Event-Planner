import sequelize from './database.js'; // Import Sequelize Instance
import { UserFactory } from './user.js';

// Initialize User Model with Sequelize Instance
const User = UserFactory(sequelize);

export { sequelize, User };







