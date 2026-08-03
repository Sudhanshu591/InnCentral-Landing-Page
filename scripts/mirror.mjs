import scrape from "website-scraper";
import { rmSync, existsSync } from "node:fs";

const ORIGIN = "https://light-turtle-275913.framer.app";

// Every top-level route from the Framer site-map (detail pages get picked up
// by recursion from their index pages).
const routes = [
  "/",
  "/feature",
  "/pricing",
  "/about",
  "/career",
  "/integration",
  "/changelog",
  "/terms-and-conditions",
  "/privacy-policy",
  "/contact",
  "/book-a-demo",
  "/case-study",
  "/blog",
  "/404",
];

const dir = "./framer-mirror";
if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });

const allow = (url) =>
  url.startsWith(ORIGIN) ||
  url.includes("framerusercontent.com") ||
  url.includes("framer.com/") ||
  url.includes("fonts.gstatic.com") ||
  url.includes("fonts.googleapis.com") ||
  url.includes("events.framer.com");

await scrape({
  urls: routes.map((r) => ORIGIN + r),
  directory: dir,
  recursive: true,
  maxRecursiveDepth: 1, // follow links from index pages → detail pages
  filenameGenerator: "bySiteStructure",
  prettifyUrls: false,
  urlFilter: allow,
  requestConcurrency: 4,
  request: {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36",
    },
  },
});

console.log("MIRROR DONE →", dir);
