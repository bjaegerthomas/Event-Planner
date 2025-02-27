import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure dist folder is created
    emptyOutDir: true, // Clears old build files before a new build
    rollupOptions: {
      input: {
        main: "index.html",
      },
      external: ["jwt-decode"], // Moved outside of `input`
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://my-team-ep-tester.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
