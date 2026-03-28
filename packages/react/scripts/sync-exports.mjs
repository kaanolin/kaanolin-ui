#!/usr/bin/env node
/**
 * Auto-generate package.json "exports" and "typesVersions" from src/{name}/index.ts.
 * Run: node scripts/sync-exports.mjs
 */
import { readdirSync, statSync, existsSync, readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkgPath = resolve(__dirname, "../package.json");
const srcDir = resolve(__dirname, "../src");

const pkg = JSON.parse(readFileSync(pkgPath, "utf-8"));

// Discover component directories
const components = readdirSync(srcDir)
  .filter((name) => {
    if (name.startsWith("_") || name.startsWith(".")) return false;
    const dirPath = resolve(srcDir, name);
    if (!statSync(dirPath).isDirectory()) return false;
    return existsSync(resolve(dirPath, "index.ts"));
  })
  .sort();

// Build exports map
const exports = {
  ".": {
    types: "./dist/index.d.ts",
    import: "./dist/index.js",
    require: "./dist/index.cjs",
  },
};

const typesVersions = { "*": {} };

for (const name of components) {
  exports[`./${name}`] = {
    types: `./dist/${name}/index.d.ts`,
    import: `./dist/${name}.js`,
    require: `./dist/${name}.cjs`,
  };
  typesVersions["*"][name] = [`./dist/${name}/index.d.ts`];
}

// Preserve CSS exports
exports["./styles"] = "./dist/styles/index.css";
exports["./styles/index.css"] = "./dist/styles/index.css";
exports["./styles/colors"] = "./dist/styles/colors.css";
exports["./styles/typography"] = "./dist/styles/typography.css";
exports["./styles/shadows"] = "./dist/styles/shadows.css";
exports["./styles/spacing"] = "./dist/styles/spacing.css";

pkg.exports = exports;
pkg.typesVersions = typesVersions;

writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

console.log(`✓ Synced ${components.length} component exports to package.json`);
console.log(`  Components: ${components.join(", ")}`);
