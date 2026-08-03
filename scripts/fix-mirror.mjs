import { readdirSync, statSync, readFileSync, writeFileSync, renameSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = "./framer-mirror";
const appDir = join(root, "light-turtle-275913.framer.app");
const hostDirs = ["framerusercontent.com", "fonts.gstatic.com", "events.framer.com"];

// 1) Move cross-host asset folders INTO the site root so everything is servable
//    from a single web root with absolute /host/... paths.
for (const h of hostDirs) {
  const from = join(root, h);
  const to = join(appDir, h);
  if (existsSync(from) && !existsSync(to)) {
    renameSync(from, to);
    console.log("moved", h, "→ site root");
  }
}

// 2) Rewrite relative "../(../)*host.com" references to absolute "/host.com"
const hostAlt = hostDirs.map((h) => h.replace(/\./g, "\\.")).join("|");
const re = new RegExp(`(?:\\.\\./)+(${hostAlt})`, "g");

const exts = new Set([".html", ".css", ".mjs", ".js"]);
let filesTouched = 0;

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) {
      walk(p);
    } else {
      const dot = name.lastIndexOf(".");
      const ext = dot >= 0 ? name.slice(dot) : "";
      if (!exts.has(ext)) continue;
      const src = readFileSync(p, "utf8");
      if (!re.test(src)) continue;
      re.lastIndex = 0;
      writeFileSync(p, src.replace(re, "/$1"));
      filesTouched++;
    }
  }
}

walk(appDir);
console.log("rewrote references in", filesTouched, "files");
console.log("SITE ROOT →", appDir);
