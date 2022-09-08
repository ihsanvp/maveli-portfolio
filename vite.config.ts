import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: mode == "production" ? "/maveli-portfolio/" : "/",
    plugins: [svelte()],
  };
});
