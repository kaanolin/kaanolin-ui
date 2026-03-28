import { resolve } from "path";
import { readdirSync, statSync, existsSync } from "fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";

/**
 * Auto-discover component entry points from src/{name}/index.ts.
 * Directories starting with "_" (e.g. _shared) are excluded.
 */
function getComponentEntries() {
  const srcDir = resolve(__dirname, "src");
  const entries: Record<string, string> = {
    index: resolve(srcDir, "index.ts"),
  };

  for (const name of readdirSync(srcDir)) {
    if (name.startsWith("_") || name.startsWith(".")) continue;
    const dirPath = resolve(srcDir, name);
    if (!statSync(dirPath).isDirectory()) continue;
    const indexPath = resolve(dirPath, "index.ts");
    if (existsSync(indexPath)) {
      entries[name] = indexPath;
    }
  }

  return entries;
}

export default defineConfig({
  resolve: {
    alias: {
      "@kaanolin/utils": resolve(__dirname, "../utils/src/index.ts"),
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    dts({
      include: ["src"],
      exclude: [
        "src/**/*.test.tsx",
        "src/**/*.test.ts",
        "src/**/*.stories.tsx",
        "src/setup-tests.ts",
      ],
    }),
  ],
  build: {
    lib: {
      entry: getComponentEntries(),
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "class-variance-authority",
        /^@radix-ui\//,
        /^@tiptap\//,
        /^prosemirror/,
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    cssCodeSplit: false,
  },
});
