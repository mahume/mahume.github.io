# Agent Guidelines for Portfolio Codebase

## Build/Test/Lint Commands

- **Dev**: `pnpm run dev` or `just start`
- **Build**: `pnpm run build` or `just build`
- **Type Check**: `pnpm run check` (svelte-check)
- **Lint**: `pnpm run lint` or `just lint` (ESLint + Prettier)
- **Format**: `pnpm run format` or `just format`
- **Format Check**: `pnpm run format:check`
- **All Checks**: `just check` (runs format, lint, svelte checks)

## Tech Stack

- **Framework**: SvelteKit 2 with Svelte 5 (using runes: `$props`, `$state`)
- **Adapter**: `@sveltejs/adapter-static` (SPA mode with prerendering)
- **Styling**: Tailwind CSS 4 + Bootstrap 4 (legacy)
- **i18n**: Paraglide JS (inlang)
- **TypeScript**: Strict mode enabled

## Code Style

- **Formatting**: Tabs for indentation, single quotes, 100 char width, no trailing commas
- **Imports**: Use `$lib` alias for lib imports (e.g., `import { x } from '$lib/foo'`)
- **Types**: Always use TypeScript, define interfaces for complex data structures
- **Naming**: camelCase for variables/functions, PascalCase for types/interfaces/components
- **Svelte Files**: Use `<script lang="ts">` for all component scripts
- **Runes**: Use Svelte 5 runes (`$props()`, `$state()`, `$derived()`) not legacy reactive statements
