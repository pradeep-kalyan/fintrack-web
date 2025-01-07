import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Fintrack/", // Path for GitHub Pages
  build: {
    outDir: "dist", // Output folder for the production build
  },
});
