import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/weJump_Fe/",
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@components", replacement: "/src/components" },
      { find: "@store", replacement: "/src/store" },
      { find: "@styles", replacement: "/src/styles" },
      { find: "@router", replacement: "/src/router" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@api", replacement: "/src/api" },
    ],
  },
});
