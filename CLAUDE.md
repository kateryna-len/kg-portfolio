# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
pnpm dev          # start dev server
pnpm build        # production build
pnpm lint         # ESLint
pnpm test         # run tests once (Vitest)
pnpm test:watch   # run tests in watch mode
pnpm format       # format with oxfmt
pnpm db:init      # initialise database
pnpm db:migrate   # run better-auth migrations
```

## Stack

- **Next.js 16** (App Router) — breaking changes vs. older versions; read `node_modules/next/dist/docs/` before touching routing or rendering
- **React 19** with Server Components by default
- **Tailwind CSS v4** — config via `postcss.config.mjs`, no `tailwind.config.*` file
- **TypeScript** strict mode; path alias `@/*` → project root
- **Bun** as runtime and package manager (`pnpm` scripts delegate to Bun)

## Architecture

All application code lives under `app/` (Next.js App Router):

- `app/layout.tsx` — root layout with Geist font variables and global styles
- `app/page.tsx` — home page (Server Component)
- `app/globals.css` — global CSS; imports Tailwind with `@import "tailwindcss"`

For slow client-side navigations, `Suspense` alone is insufficient — also export `unstable_instant` from the route. See `node_modules/next/dist/docs/01-app/02-guides/instant-navigation.mdx`.
