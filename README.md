# f1-mil-tech-mono

This is a mono repo for Flight-1.com's Military and Tech Sites. CMS provided by Sanity.

- `military/` — Next.js app for the Military site
- `tech/` — Next.js app for the Tech site

## Running locally

Each site is its own Next.js app:

```sh
cd military   # or tech
npm install
npm run dev
```

Requires a `.env.local` in the app directory with the Sanity project vars
(`NEXT_PUBLIC_MILITARY_SANITY_PROJECT_ID` / `NEXT_PUBLIC_MILITARY_SANITY_DATASET`
for military; `NEXT_PUBLIC_SANITY_PROJECT_ID` / `NEXT_PUBLIC_SANITY_DATASET` for tech).

## Sanity Studio

The Studio is embedded in each Next.js app at the **`/cms`** route (see
`sanity.config.ts` → `basePath`), so there is no separate studio server:

- Local: run the dev server, then open <http://localhost:3000/cms>
- Production: `https://<site-domain>/cms`

Log in with your Sanity account. Schemas live in `military/sanity/militarySchemas/`
(desk structure in `military/sanity/sanity-military-structure.ts`), and content
queries in `military/sanity/sanity-military-utils.ts`. After schema changes, run
`npm run generate` to re-extract the schema and regenerate types.
