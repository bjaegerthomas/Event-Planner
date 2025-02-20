const express = require('express');
const cors = require('cors');
const { sequelize, syncDatabase } = require('./models');
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Enable JSON body parsing
app.use(cors()); // Enable CORS

// Routes
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);

// Sync Database and Start Server
const startServer = async () => {
  try {
    await syncDatabase(); // Ensures models sync properly
    console.log('Database connected and tables created!');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('Error syncing database:', err);
  }
};

startServer();