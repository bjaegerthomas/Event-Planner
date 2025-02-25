import { defineConfig } from "vite";
import dotenv from "dotenv";

dotenv.config(); // Load .env variables

export default defineConfig({
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/api": {
        target:
          process.env.VITE_API_URL ||
          "https://omg2-event-planner.onrender.com/api/events",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

/*
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/api": {
        target: process.env.VITE_API_URL || "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
*/
