#!/usr/bin/env node
/**
 * Auto-generate package.json "exports" for @kaanolin/react-icons by scanning
 * src/ for variant/category indexes + flat collection indexes. Run:
 *   node scripts/sync-icons-exports.mjs
 *
 * Shapes produced:
 *   "./line"                 → ./dist/line/index.d.ts + ./dist/line.{js,cjs}
 *   "./line/<category>"      → ./dist/line/<category>/index.d.ts + ./dist/line/<category>.{js,cjs}
 *   "./flags", "./logos", etc. (flat collections)
 *   "./metadata/*"           → ./metadata/*.json
 */
import { readdirSync, statSync, existsSync, readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkgPath = resolve(__dirname, "../package.json");
const srcDir = resolve(__dirname, "../src");

const pkg = JSON.parse(readFileSync(pkgPath, "utf-8"));

const variants = ["line", "solid", "duotone", "duocolor"];
const flatCollections = [
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

const exports = {
  ".": {
    types: "./dist/index.d.ts",
    import: "./dist/index.js",
    require: "./dist/index.cjs",
  },
  "./types": {
    types: "./dist/types.d.ts",
    import: "./dist/types.js",
    require: "./dist/types.cjs",
  },
  "./theme": {
    types: "./dist/theme.d.ts",
    import: "./dist/theme.js",
    require: "./dist/theme.cjs",
  },
};

const typesVersions = { "*": {} };

for (const variant of variants) {
  const variantDir = resolve(srcDir, variant);
  if (!existsSync(variantDir) || !statSync(variantDir).isDirectory()) continue;
  exports[`./${variant}`] = {
    types: `./dist/${variant}/index.d.ts`,
    import: `./dist/${variant}.js`,
    require: `./dist/${variant}.cjs`,
  };
  typesVersions["*"][variant] = [`./dist/${variant}/index.d.ts`];
  for (const category of readdirSync(variantDir).sort()) {
    const catDir = resolve(variantDir, category);
    if (!statSync(catDir).isDirectory()) continue;
    if (!existsSync(resolve(catDir, "index.ts"))) continue;
    exports[`./${variant}/${category}`] = {
      types: `./dist/${variant}/${category}/index.d.ts`,
      import: `./dist/${variant}/${category}.js`,
      require: `./dist/${variant}/${category}.cjs`,
    };
    typesVersions["*"][`${variant}/${category}`] = [
      `./dist/${variant}/${category}/index.d.ts`,
    ];
  }
}

for (const collection of flatCollections) {
  const dir = resolve(srcDir, collection);
  if (!existsSync(dir) || !statSync(dir).isDirectory()) continue;
  if (!existsSync(resolve(dir, "index.ts"))) continue;
  exports[`./${collection}`] = {
    types: `./dist/${collection}/index.d.ts`,
    import: `./dist/${collection}.js`,
    require: `./dist/${collection}.cjs`,
  };
  typesVersions["*"][collection] = [`./dist/${collection}/index.d.ts`];
}

exports["./metadata/*"] = "./metadata/*.json";

pkg.exports = exports;
pkg.typesVersions = typesVersions;
writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

console.log(`✓ Synced ${Object.keys(exports).length} exports to package.json`);
