/**
 * Copy the real Framer image/video assets out of the local mirror into
 * public/assets/ with clean, URL-safe filenames (highest resolution per asset).
 * Run once: node scripts/copy-assets.mjs
 */
import { readdirSync, mkdirSync, copyFileSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";

const base = "framer-mirror/light-turtle-275913.framer.app/framerusercontent.com";
const outDir = "public/assets";
mkdirSync(outDir, { recursive: true });

function baseId(name) {
  // strip Framer transform suffixes: "_scale-down-to=..." / "_width=..."
  const i = name.search(/_(scale-down-to|width)=/);
  const dot = name.lastIndexOf(".");
  const ext = dot >= 0 ? name.slice(dot) : "";
  const id = i >= 0 ? name.slice(0, i) : name.slice(0, dot);
  return { id, ext };
}

function widthOf(name) {
  const m = name.match(/width=(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}

// Pick the largest-width file per (baseId, ext).
function pickBest(dir) {
  if (!existsSync(dir)) return;
  const best = new Map();
  for (const name of readdirSync(dir)) {
    if (!statSync(join(dir, name)).isFile()) continue;
    const { id, ext } = baseId(name);
    if (!/\.(png|jpe?g|webp|svg|gif|mp4|avif)$/i.test(ext)) continue;
    const key = id + ext;
    const w = widthOf(name);
    const prev = best.get(key);
    if (!prev || w > prev.w) best.set(key, { name, w });
  }
  let n = 0;
  for (const [key, { name }] of best) {
    copyFileSync(join(dir, name), join(outDir, key));
    n++;
  }
  return n;
}

const imgs = pickBest(join(base, "images")) || 0;
const assets = pickBest(join(base, "assets")) || 0;
console.log(`copied ${imgs} images + ${assets} media → ${outDir}`);
