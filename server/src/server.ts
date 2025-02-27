import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Enable CORS
app.use(
  cors({
    origin: ["http://localhost:3000", "https://my-team-ep-tester.onrender.com"], // ✅ Allow frontend origin
    credentials: true, // ✅ Allow cookies/auth headers
  })
);

// ✅ Define `__dirname` properly
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ✅ Correct `clientBuildPath`
const clientBuildPath = path.resolve(__dirname, "../../client/dist");

// ✅ Serve static frontend files
app.use(express.static(clientBuildPath));

app.use(express.json());

// ✅ API Routes
import authRoutes from "./routes/auth.js";
import eventRoutes from "./routes/events.js";
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

// ✅ Serve React frontend (catch-all for non-API routes)
app.get("*", (_, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});





/*import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// heres what i added
// ✅ Enable CORS for frontend requests
app.use(
  cors({
    origin: ["http://localhost:3000", "https://my-team-ep-tester.onrender.com"], // ✅ Allow frontend origin
    credentials: true, // ✅ If sending cookies or auth headers
  })
);
// hers where i end 


// is this still needed try build without 
// ✅ Correctly define `__dirname`
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ✅ Allow CORS (for frontend-backend communication)
//i blocked out cors array beloy becaues of above cors function
// app.use(cors());
app.use(express.json());

// ✅ Serve frontend files
const clientBuildPath = path.join(__dirname, "../client/dist");
app.use(express.static(clientBuildPath));

// ✅ API Routes

import authRoutes from "./routes/auth.js";
import eventRoutes from "./routes/events.js";
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

// ✅ Ensure React routes are served
app.get("*", (_, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
*/

// below another version 
/*
import dotenv from "dotenv";
dotenv.config();

import express from "express";
// import { sequelize } from "./config/connections.js";
import authRoutes from "./routes/auth.js";
import eventRoutes from "./routes/events.js";
import { fileURLToPath } from "url"; //  define `__dirname`
import { dirname } from "path";
import path from "path";


const app = express();
const PORT = process.env.PORT || 3005; 

// Define `__dirname` for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve frontend build folder
app.use(express.static(path.join(__dirname, "../../client/dist")));



// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

app.use(express.json());

// Database connection
// const connectDB = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("✅ Database connected successfully");
//     await sequelize.sync();
//   } catch (error) {
//     console.error("❌ Database connection failed:", error);
//   }
// };
// connectDB();

// Root endpoint
app.get("*", (_, res) => {  // *asteraisk for all, rcompare slash /
 res.sendFile(path.join(__dirname, "../../client/dist/index.html"));
  //res.send("🎉 Welcome to Occasionally, your place for Event Planning, Online, Organized, for your Most Memorable and Greatest Gatherings. OMG²!");
});


app.listen(PORT, () => { // *asteraisk for all, rcompare slash /
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
*/




