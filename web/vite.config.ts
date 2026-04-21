import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  plugins: [
    TanStackRouterVite({ routesDirectory: "./src/routes", generatedRouteTree: "./src/routeTree.gen.ts" }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: [
      { find: "~", replacement: resolve(__dirname, "./src") },
      { find: /^@kaanolin\/utils$/, replacement: resolve(__dirname, "../packages/utils/src/index.ts") },
      { find: /^@kaanolin\/react$/, replacement: resolve(__dirname, "../packages/react/src/index.ts") },
      { find: /^@kaanolin\/react\/(.+)$/, replacement: resolve(__dirname, "../packages/react/src") + "/$1/index.ts" },
      { find: /^@kaanolin\/react-icons$/, replacement: resolve(__dirname, "../packages/icons/src/index.ts") },
      { find: /^@kaanolin\/react-icons\/(.+)$/, replacement: resolve(__dirname, "../packages/icons/src") + "/$1/index.ts" },
    ],
  },
  server: {
    fs: { allow: [resolve(__dirname, "..")] },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("/packages/icons/src/line/")) return "icons-line";
          if (id.includes("/packages/icons/src/solid/")) return "icons-solid";
          if (id.includes("/packages/icons/src/duotone/")) return "icons-duotone";
          if (id.includes("/packages/icons/src/duocolor/")) return "icons-duocolor";
        },
      },
    },
    chunkSizeWarningLimit: 2500,
  },
});
