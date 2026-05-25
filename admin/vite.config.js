import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  server: { port: 3001 },
  resolve: {
    alias: {
      "@ministore/api": resolve(__dirname, "../../packages/api/src/index.ts"),
    },
  },
});
