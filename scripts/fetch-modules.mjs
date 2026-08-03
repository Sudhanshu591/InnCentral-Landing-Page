/**
 * Framer's published JS is a graph of ES modules under
 * framerusercontent.com/sites/<id>/. website-scraper only grabs the entry
 * script, so the imported chunks 404 and nothing renders. This walks the whole
 * import graph (seeded from every mirrored HTML page) and downloads it locally,
 * then localizes the absolute CDN module URLs so it runs offline.
 */
import { readdirSync, statSync, readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";

const appDir = "./framer-mirror/light-turtle-275913.framer.app";
const CDN = "https://framerusercontent.com";

// --- seed module URLs from all HTML + already-downloaded .mjs ---------------
const seeds = new Set();
const reAbs = /https:\/\/framerusercontent\.com\/sites\/[A-Za-z0-9]+\/[A-Za-z0-9_.$-]+\.mjs/g;
const reLocal = /\/framerusercontent\.com\/sites\/[A-Za-z0-9]+\/[A-Za-z0-9_.$-]+\.mjs/g;

function collectSeeds(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) collectSeeds(p);
    else if (/\.(html|mjs)$/.test(name)) {
      const s = readFileSync(p, "utf8");
      for (const m of s.matchAll(reAbs)) seeds.add(m[0]);
      for (const m of s.matchAll(reLocal)) seeds.add(CDN + m[0].slice("/framerusercontent.com".length));
    }
  }
}
collectSeeds(appDir);

// --- BFS the import graph ----------------------------------------------------
const localPathFor = (url) => join(appDir, url.replace("https://", ""));
const queue = [...seeds];
const done = new Set();
let downloaded = 0,
  fromCache = 0,
  failed = 0;

function extractImports(code, baseUrl) {
  const specs = new Set();
  const patterns = [
    /(?:import|export)[^"'`]*?from\s*["']([^"']+)["']/g,
    /import\(\s*["']([^"']+)["']\s*\)/g,
  ];
  for (const re of patterns) {
    for (const m of code.matchAll(re)) {
      const spec = m[1];
      if (!spec.endsWith(".mjs")) continue;
      try {
        const abs = new URL(spec, baseUrl).href;
        if (abs.startsWith(CDN)) specs.add(abs);
      } catch {}
    }
  }
  return specs;
}

while (queue.length) {
  const url = queue.shift();
  if (done.has(url)) continue;
  done.add(url);

  const dest = localPathFor(url);
  let code;
  if (existsSync(dest)) {
    code = readFileSync(dest, "utf8");
    fromCache++;
  } else {
    try {
      const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
      if (!res.ok) {
        failed++;
        continue;
      }
      code = await res.text();
      mkdirSync(dirname(dest), { recursive: true });
      writeFileSync(dest, code);
      downloaded++;
      if (downloaded % 25 === 0) console.log("  downloaded", downloaded, "…");
    } catch {
      failed++;
      continue;
    }
  }
  for (const dep of extractImports(code, url)) if (!done.has(dep)) queue.push(dep);
}

console.log(`\nGraph: ${done.size} modules  (downloaded ${downloaded}, cached ${fromCache}, failed ${failed})`);

// --- localize absolute CDN module URLs so it runs offline -------------------
let rewritten = 0;
function localize(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) localize(p);
    else if (/\.(html|mjs)$/.test(name)) {
      const s = readFileSync(p, "utf8");
      const out = s.replace(/https:\/\/framerusercontent\.com\/sites\//g, "/framerusercontent.com/sites/");
      if (out !== s) {
        writeFileSync(p, out);
        rewritten++;
      }
    }
  }
}
localize(appDir);
console.log("localized module URLs in", rewritten, "files");
