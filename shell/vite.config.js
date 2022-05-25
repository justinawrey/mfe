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
        remote: "https://justinawrey-mfe.deno.dev/cdn/remote@latest",
      },
      shared: ["vue"],
    }),
  ],
  build: {
    target: "esnext",
  },
});
