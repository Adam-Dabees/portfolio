# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern, minimalist portfolio template built with Astro and Tailwind CSS v4. It's designed to be easily customizable through a single configuration file while maintaining a clean, professional appearance.

## Tech Stack

- **Astro**: Static site generator
- **Tailwind CSS v4**: Utility-first CSS framework using the new @tailwindcss/vite plugin
- **TypeScript**: For type-safe configuration
- **Icons**: Inline SVG (Tabler-style paths), no icon dependency

## Development Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

## Architecture

The project follows a component-based architecture with all customization centralized in `src/config.ts`:

- **Components** (`src/components/`): One Astro component per section (Hero, About,
  Experience, Projects, Stack, Leadership, Education, Header, Footer), plus the shared
  `SectionHeading.astro` and the decorative `PongSignature.astro`
- **Main Layout** (`src/pages/index.astro`): Single-page layout that imports all components
- **Configuration** (`src/config.ts`): Single source of truth for all content and customization

### Key Architectural Decisions

1. **Single Configuration File**: All content is managed through `src/config.ts` to make customization simple
2. **Conditional Rendering**: Sections automatically hide if their data is removed from the config
3. **Component Independence**: Each section is a self-contained component that reads from the config
4. **Token-Driven Theming**: Colors are CSS custom properties in `global.css`, surfaced
   to Tailwind via `@theme inline`, so a single token change re-themes the whole site and
   the light/dark toggle works without a reload

## Important Implementation Details

- Tailwind CSS v4 via the Vite plugin. Design tokens live in `src/styles/global.css`.
- Theming: dark is the default. `data-theme="light"` on `<html>` swaps the token block.
  An inline script in `src/pages/index.astro` resolves the theme before first paint
  (localStorage, then `prefers-color-scheme`) so there is no flash; the toggle in
  `Header.astro` writes the choice back to localStorage.
- Colors are exposed to Tailwind through `@theme inline`, which keeps utilities like
  `text-ink` and `border-line` pointing at the live CSS variables. That is what lets the
  toggle re-theme the page without a reload. Do not inline hex values in components.
- Type pairing: IBM Plex Mono is the default for the whole UI (headings, labels,
  figures); IBM Plex Sans is applied only to long-form prose via the `.prose-body`
  class. Keep the monospace character dominant.
- Motion: `.reveal` elements start hidden and are revealed by a single
  IntersectionObserver in `index.astro`. A `<noscript>` block and the
  `prefers-reduced-motion` query both force them visible.
- No linting or testing framework is configured.
- All components are `.astro` (not React/Vue).

## Working with Components

When modifying components:
1. Components read directly from the imported `siteConfig` object.
2. Use the semantic color utilities (`canvas`, `raised`, `inset`, `line`, `line-strong`,
   `ink`, `dim`, `faint`, `accent`) rather than Tailwind's built-in palette, so both
   themes stay correct.
3. Use `.label` for small uppercase eyebrows, `.nums` for anything with figures in it,
   and `.prose-body` for reading text.
4. Section shells share `SectionHeading.astro` and the
   `mx-auto max-w-6xl px-6 sm:px-8 py-24 sm:py-32` + 12-column grid pattern.
5. Add `reveal` to anything that should animate in on scroll.

## Metric Markup

Strings in `src/config.ts` may wrap figures in `**double asterisks**`. `src/lib/text.ts`
splits those out and components render them with the `.metric` class, a subtle accent
underline. Content is always rendered as text nodes; nothing from the config is injected
as raw HTML.

## Configuration Structure

`src/config.ts` exports a typed `siteConfig` object (interfaces are declared in the same
file) with these sections:
- Basic info: `name`, `title`, `description`
  (the accent color is *not* here; it is a theme token, `--c-accent`, defined per
  theme in `src/styles/global.css`, because dark and light need different values)
- `now`: current role/org/location, surfaced in the hero status line and page title
- `availability`: short availability string
- `social`: email, linkedin, github, twitter (all optional except email)
- `highlights`: the three-figure data strip under the hero
- `aboutMe`: string, split on blank lines into paragraphs
- `skillGroups`: array of `{label, items[]}`, grouped by purpose, rendered in `Stack.astro`
- `experience`: array of `{company, context, title, dateRange, location, current?, website?, bullets[]}`
- `projects`: array of `{name, tagline, year, description, link?, skills[]}`
- `leadership`: array of `{role, org, dateRange, description}`
- `education`: array of `{school, degree, dateRange, location, achievements[], coursework?}`

Section components render nothing when their config array is empty.