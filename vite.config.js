import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "@vant/auto-import-resolver";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  server: {
    proxy: {
      "/hot-news": {
        target: "https://www.mxnzp.com/api/news/list/v2?typeId=546&page=1&app_id=rj1auorqpktnqwrg&app_secret=LApb4canINabgdVGg5zTkMGXZYNNNxSf",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/hot-news/, ""),
      },
      "/entertainment-news": {
        target: "https://www.mxnzp.com/api/news/list/v2?typeId=533&page=1&app_id=rj1auorqpktnqwrg&app_secret=LApb4canINabgdVGg5zTkMGXZYNNNxSf",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/entertainment-news/, ""),
      },
      "/sport-news": {
        target: "https://www.mxnzp.com/api/news/list/v2?typeId=534&page=1&app_id=rj1auorqpktnqwrg&app_secret=LApb4canINabgdVGg5zTkMGXZYNNNxSf",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/sport-news/, ""),
      },
      "/car-news": {
        target: "https://www.mxnzp.com/api/news/list/v2?typeId=535&page=1&app_id=rj1auorqpktnqwrg&app_secret=LApb4canINabgdVGg5zTkMGXZYNNNxSf",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/car-news/, ""),
      },
    },
  },
});
