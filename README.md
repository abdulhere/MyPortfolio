# MyPortfolioProject

This is my first deployed web app — a small single-page portfolio built with React + TypeScript and Vite. It showcases my projects, skills, and contact info. Built as a learning project and live demonstration of my work.

## Features
- Single-page app with client routing (HashRouter)
- Component-driven UI (Navbar, Footer, pages)
- Centralized content in `constants.ts`
- Type-safe data shapes in `types.ts`
- Small, fast Vite dev/build workflow

## Tech stack
- React + TypeScript
- Vite
- react-router-dom (HashRouter)
- lucide-react (icons)

## Quick start
1. Install:
```bash
npm install
```
2. Dev server:
```bash
npm run dev
```
3. Build:
```bash
npm run build
```
4. Preview production build locally:
```bash
npm run preview
```

## Environment
- Set any env keys in `.env.local` if needed.
- `GEMINI_API_KEY` is referenced in `vite.config.ts` and mapped to `process.env.GEMINI_API_KEY` — add it to `.env.local` if your setup requires it.

## Important files / structure
- `index.tsx` — app entry, mounts React tree.
- `App.tsx` — router + main layout (imports `Navbar`, `Footer`, and `pages/*`).
- `components/` — shared UI (e.g. `Navbar.tsx`, `Footer.tsx`).
- `pages/` — each page is a standalone React component.
- `constants.ts` — central place for content (profile, contact, projects, skills). Edit this file to update site copy.
- `types.ts` — TypeScript types used across the app.
- `vite.config.ts` — Vite config; maps `@` alias to project root and exposes `GEMINI_API_KEY`.

## How to update content
- Edit `constants.ts` for text, projects, skills, or contact info. Pages import these constants, so updating them updates the site globally.
- To add a new page:
   1. Create `pages/NewPage.tsx` and export a default React component.
   2. Add a route in `App.tsx`:
       ```tsx
       <Route path="/new" element={<NewPage />} />
       ```
   3. Add a nav item in `components/Navbar.tsx`.

## Deployment notes
- Uses HashRouter — deployment only needs to serve `index.html`; no server rewrites required.
- `PROFILE_IMAGE_URL` is `"./profile.jpg"` and should be placed next to `index.html` so the path resolves at runtime.
- `@` alias is configured in `vite.config.ts` and `tsconfig.json` — prefer imports like:
   ```ts
   import { CONTACT_INFO } from '@/constants'
   ```

## Gotchas
- Tailwind is not included — verify styling source before adding Tailwind utilities.
- Do not change `vite.config.ts` alias or env defines without checking other code that depends on them.
- Keep type definitions in `types.ts` stable; many components depend on them.

## License
Add your preferred license or leave as-is.

---

This repository is intended as my first deployed portfolio and reference for how I build and structure small React + TypeScript apps.