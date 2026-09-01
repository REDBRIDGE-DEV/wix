import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // single-file library build
  build: {
    lib: {
      entry: "src/main.jsx",
      formats: ["iife"],
      name: "HelloWorld",
      fileName: () => "hello-world.js",
    },
    rollupOptions: {
      output: { extend: true },
    },
  },
});
