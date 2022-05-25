import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

const name = "shell";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name,
      filename: "remoteEntry.js",
      remotes: {
        remote: "https://microfrontends.deno.dev/cdn/remote/remoteEntry.js",
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
