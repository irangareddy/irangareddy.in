# irangareddy.in

A Vite + React portfolio for Ranga Reddy: agent systems, on-device AI,
Apple-platform work, physical computing, and applied ML projects.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Content

Portfolio copy and project links live in `src/content.js`. The app exposes three
client-side routes:

- `/` — profile and selected work
- `/work` — filterable public project archive
- `/wall` — research and learning map

## Deploy to Vercel

The included `vercel.json` rewrites client-side routes to `index.html`.
Run `vercel --prod` from the repository root for a production deployment.
