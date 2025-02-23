// Import required modules
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from '../server/src/routes/api/database.js'; // I need to make sure this is the correct path

// Import routes
import authRoutes from '../server/src/routes/api/auth.js';
import eventRoutes from '../server/src/routes/api/events.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enables CORS for cross-origin requests
app.use(express.json()); // Parses JSON request bodies

// Test database connection
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected successfully');
    await sequelize.sync({ alter: true }); // Sync models with database
  } catch (error) {
    console.error('❌ Database connection failed:', error);
  }
};
connectDB();

// Define API routes
app.use('/auth', authRoutes);
app.use('/events', eventRoutes);

// Root route (for testing)
app.get('/', (req, res) => {
  res.send('🎉 Welcome to the Event Planner API!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});