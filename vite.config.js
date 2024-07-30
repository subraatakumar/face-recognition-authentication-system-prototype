import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "face-recognition-authentication-system-prototype",
    build: {
      outDir: "dist",
    },
  };

  return config;
});
