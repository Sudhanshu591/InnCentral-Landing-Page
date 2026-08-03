# InnCentral — exact site mirror

A 1:1 local copy of the InnCentral (Bartoon) **Framer** site, including all of
its original animations (preloader, scroll-reveal appears, counting numbers,
rolling text, Lenis smooth-scroll). This is Framer's real published production
build — HTML, CSS, JS runtime, fonts, and image/vector assets — mirrored into
`framer-mirror/` and served as a static site.

Source Framer project: `Bartoon (copy)` · published at
`https://light-turtle-275913.framer.app`.

## Run it

```bash
npm install      # installs `serve` + `website-scraper`
npm start        # serves the mirror at http://localhost:3000
```

All routes work with clean URLs, e.g. `/feature`, `/pricing`, `/blog`,
`/blog/<post>`, `/career/<role>`, `/case-study`, `/404`.

## Re-pull the latest from Framer

If you change the site in Framer and re-publish, refresh the local copy:

```bash
npm run mirror   # re-downloads the published build + fixes asset paths
npm start
```

## How it works

- `scripts/mirror.mjs` — downloads every route and asset from the published
  Framer site (via `website-scraper`), preserving the URL/path structure.
- `scripts/fix-mirror.mjs` — moves the cross-host asset folders
  (`framerusercontent.com`, `fonts.gstatic.com`, …) into the site root and
  rewrites relative `../` references to absolute paths, so everything resolves
  from a single web root at every route depth.
- `scripts/fetch-modules.mjs` — walks Framer's ES-module import graph
  (`react`, `motion`, `framer` runtime + every per-component chunk), downloads
  it, and localizes the module URLs. Without this the JS 404s and the page
  renders blank.
- `framer-mirror/light-turtle-275913.framer.app/` — the served web root.

## Note

The mirror is self-contained: content, layout, styling, fonts, the JS runtime,
and the appear-animations are all served locally. (Framer analytics beacons and
the editor init script still point at Framer's servers but are inert.)
# InnCentral-Landing-Page
