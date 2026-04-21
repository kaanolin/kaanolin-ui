import { resolve } from "path";
import { readdirSync, statSync, existsSync } from "fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

/**
 * Auto-discover entries so every variant, category, and collection becomes a
 * tree-shakeable subpath import. Consumers can do:
 *   import { Heart } from "@kaanolin/react-icons/line/general";
 * and the bundler ships only that category chunk.
 */
function getIconEntries() {
  const srcDir = resolve(__dirname, "src");
  const entries: Record<string, string> = {
    index: resolve(srcDir, "index.ts"),
  };

  const topLevel = [
    "types",
    "theme",
    "line",
    "solid",
    "duotone",
    "duocolor",
    "flags",
    "logos",
    "file-types",
    "social",
    "payments",
    "checks",
    "integrations",
    "stars",
    "folders",
    "featured-shapes",
    "featured-shape-outlines",
  ];

  for (const name of topLevel) {
    const filePath = resolve(srcDir, `${name}.ts`);
    const dirIndex = resolve(srcDir, name, "index.ts");
    if (existsSync(filePath)) entries[name] = filePath;
    else if (existsSync(dirIndex)) entries[name] = dirIndex;
  }

  for (const variant of ["line", "solid", "duotone", "duocolor"]) {
    const variantDir = resolve(srcDir, variant);
    if (!existsSync(variantDir)) continue;
    for (const category of readdirSync(variantDir)) {
      const catDir = resolve(variantDir, category);
      if (!statSync(catDir).isDirectory()) continue;
      const catIndex = resolve(catDir, "index.ts");
      if (existsSync(catIndex)) {
        entries[`${variant}/${category}`] = catIndex;
      }
    }
  }

  return entries;
}

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src"],
      exclude: ["src/**/*.test.tsx", "src/**/*.test.ts", "src/setup-tests.ts"],
    }),
  ],
  build: {
    lib: {
      entry: getIconEntries(),
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: { react: "React", "react-dom": "ReactDOM" },
      },
    },
  },
});
