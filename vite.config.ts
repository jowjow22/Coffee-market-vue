import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), sentryVitePlugin({
    org: "jowjow",
    project: "javascript-vue"
  })],

  base: process.env.NODE_ENV === "production" ? "/Coffee-market-vue/" : "/",

  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src"),
      },
    ],
  },

  build: {
    sourcemap: true
  }
});