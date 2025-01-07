import { defineConfig } from "vite";

export default defineConfig({
  root: "./",

  base: "/fintrack-web/", // e.g., '/notes-sharing-app/'

  build: {
    outDir: "dist", // Ensure the build output is correct
  },
});
