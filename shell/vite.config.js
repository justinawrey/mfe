import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "shell",
      filename: "remoteEntry.js",
      remotes: {
        remote: "http://localhost:8000/cdn/remote/remoteEntry.js",
      },
      shared: ["vue"],
    }),
  ],
  build: {
    target: "esnext",
    assetsDir: "",
  },
  base: "/cdn/shell/",
});
