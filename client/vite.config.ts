import {
  defineConfig,
  // loadEnv
} from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
// const env = loadEnv(process.cwd(), "");

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@scenes",
        replacement: path.resolve(__dirname, "src/scenes"),
      },
      {
        find: "@state",
        replacement: path.resolve(__dirname, "src/state"),
      },
      {
        find: "@assets",
        replacement: path.resolve(__dirname, "src/assets"),
      },
    ],
  },
  // define: {
  //   "process.env.REACT_APP_BASE_URL": JSON.stringify(env.REACT_APP_BASE_URL),
  // },
});
