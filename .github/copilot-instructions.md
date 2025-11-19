# Copilot / AI Agent Instructions for MyPortfolioProject

Quick context
- Small React + TypeScript single-page app built with Vite. Entry: `index.tsx` -> `App.tsx`.
- Uses `HashRouter` for client routing (`react-router-dom` in `App.tsx`).
- UI is composed from `components/*` and `pages/*`. App-wide content lives in `constants.ts` and types in `types.ts`.

What to do first (fast path)
- Run locally: `npm install` then `npm run dev` (Vite dev server). See `package.json` scripts.
- Set environment keys (if needed): `GEMINI_API_KEY` is referenced in `vite.config.ts` and README mentions `.env.local`.

Architecture & important files
- `index.tsx` — mounts the React app.
- `App.tsx` — main router and layout (imports `Navbar`, `Footer`, and `pages/*`). To add a route: create a file in `pages/` and add a `<Route path="/your-path" element={<YourPage/>} />` in `App.tsx`.
- `components/` — shared UI like `Navbar.tsx`, `Footer.tsx`. `Navbar` demonstrates canonical nav item shape and `useLocation()`-based active state.
- `pages/` — each page is a standalone React component that imports content from `constants.ts`.
- `constants.ts` — central place for content (profile, contact, projects, skills). Edit data here rather than embedding literal strings across components.
- `types.ts` — project-specific TypeScript types (e.g. `Project`, `SkillCategory`) used by `constants.ts` and pages.
- `vite.config.ts` — Vite config; exposes `GEMINI_API_KEY` into defines as `process.env.GEMINI_API_KEY` and adds alias `@` -> project root.

Conventions and patterns (concrete)
- Content / data: prefer adding or updating entries in `constants.ts` (example: `PROJECTS` array). Pages import those arrays directly.
- Routing: uses `HashRouter` (hash-based URLs). Deployments should serve `index.html` and not rely on server-side rewrites.
- Assets: `PROFILE_IMAGE_URL` is `"./profile.jpg"` and README instructs placing `profile.jpg` next to `index.html` so paths resolve at runtime.
- Aliases: use `@` to import top-level modules (configured in `tsconfig.json` and `vite.config.ts`). Example: `import { CONTACT_INFO } from '@/constants'`.
- Icons: uses `lucide-react` (import component icons directly, as in `components/*`).

Developer workflows & commands
- Install: `npm install`
- Dev server: `npm run dev` (Vite, default port 3000 per `vite.config.ts`).
- Build: `npm run build` (Vite build)
- Preview production build locally: `npm run preview`
- Environment variables: set `GEMINI_API_KEY` in `.env.local` (README references `.env.local`). `vite.config.ts` maps it to `process.env.GEMINI_API_KEY`.

When you edit UI or pages
- Update `constants.ts` for copy/content changes. Components read from those constants—changing data here updates the whole site.
- For new pages: add the file under `pages/`, export default a React component, then add a route in `App.tsx` and a nav item in `components/Navbar.tsx`.
- Keep UI concerns in `components/` and business/content in `constants.ts` to match existing separation.

Common code examples (copy-paste)
- Add an app route (edit `App.tsx`):
  `<Route path="/new" element={<NewPage />} />`
- Importing constants with alias:
  `import { CONTACT_INFO } from '@/constants'`
- Use icon from `lucide-react` inside JSX:
  `import { ArrowRight } from 'lucide-react';` then `<ArrowRight className="h-5 w-5" />`

Gotchas / things to verify
- Styling classes look like Tailwind utility classes, but `tailwindcss` is NOT present in `package.json` dependencies. Verify where the utility styles come from before adding Tailwind-specific utilities.
- `PROFILE_IMAGE_URL` uses a relative path to `index.html` — ensure static assets placed next to `index.html` (README calls this out).
- Router is `HashRouter` — do not change to BrowserRouter without checking deployment constraints.

What not to change without asking
- `vite.config.ts` env defines and alias mapping (other code depends on `process.env.GEMINI_API_KEY` and `@` alias).
- Type definitions in `types.ts` — many components depend on these shapes.

If you need more
- Ask for confirmation whether Tailwind is intentionally omitted or provided externally.
- Tell me which area to extend (new page, content update, env setup) and I'll create the file or PR.

— End of instructions —
