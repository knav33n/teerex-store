import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": resolve(__dirname, "./src/components"),
      "@layouts": resolve(__dirname, "./src/layouts"),
      "@common": resolve(__dirname, "./src/components/common"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@types": resolve(__dirname, "./src/types"),
      "@services": resolve(__dirname, "./src/services"),
      "@routes": resolve(__dirname, "./src/routes"),
      "@contexts": resolve(__dirname, "./src/contexts"),
    },
  },
});
