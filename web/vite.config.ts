import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: [{ find: "~", replacement: resolve(__dirname, "./src") }],
  },
  server: {
    fs: { allow: [resolve(__dirname, "..")] },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("@kaanolin/react-icons/dist/line/")) return "icons-line";
          if (id.includes("@kaanolin/react-icons/dist/solid/")) return "icons-solid";
          if (id.includes("@kaanolin/react-icons/dist/duotone/")) return "icons-duotone";
          if (id.includes("@kaanolin/react-icons/dist/duocolor/")) return "icons-duocolor";
        },
      },
    },
    chunkSizeWarningLimit: 2500,
  },
});
