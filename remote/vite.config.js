import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

const name = "remote";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name,
      filename: "remoteEntry.js",
      exposes: {
        "./Remote.vue": "./src/components/Remote.vue",
      },
      shared: ["vue"],
    }),
  ],
  build: {
    target: "esnext",
    assetsDir: "",
  },
  base: `/cdn/${name}/`,
});
