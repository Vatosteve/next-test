# My App

A dark-mode productivity dashboard built with Next.js 16, Tailwind CSS v4, and TanStack Query. The overview page surfaces daily focus metrics, a goal tracker, and a visual timeline — all in a consistent dark neutral palette with amber accents.

## Tech Stack

| Layer           | Choice                                                                             |
| --------------- | ---------------------------------------------------------------------------------- |
| Framework       | [Next.js 16](https://nextjs.org/) — App Router, Turbopack                          |
| Language        | TypeScript (strict)                                                                |
| Styling         | [Tailwind CSS v4](https://tailwindcss.com/) — CSS-first config                     |
| Data fetching   | [TanStack Query v5](https://tanstack.com/query/latest)                             |
| Font            | Inter via `next/font/google`                                                       |
| Unit tests      | [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/) |
| E2E tests       | [Playwright](https://playwright.dev/)                                              |
| Package manager | [pnpm](https://pnpm.io/)                                                           |

## Project Structure

```
app/
  layout.tsx          # Root layout — Nav, QueryProvider, dark class
  page.tsx            # Overview dashboard (metrics, goals, timeline)
  about/page.tsx      # About page
  settings/page.tsx   # Settings page
  globals.css         # Tailwind v4 import + @theme + dark variant

components/
  MetricCard.tsx      # Reusable dashboard card shell
  Nav.tsx             # Top navigation bar
  QueryProvider.tsx   # TanStack Query context wrapper
  __tests__/          # Jest unit tests for each component

tests/                # Playwright E2E test suite
public/               # Static assets
```

## Getting Started

**Prerequisites:** Node.js LTS, pnpm 10+

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

```bash
pnpm dev          # Development server with Turbopack (http://localhost:3000)
pnpm build        # Production build
pnpm start        # Serve the production build
pnpm lint         # ESLint + Next.js rules
pnpm test         # Jest unit tests (run once)
pnpm test:watch   # Jest unit tests (watch mode)
```

## Components

### `MetricCard`

Base card shell for dashboard widgets. Renders a fixed `4/3` aspect-ratio dark card with a title, optional widget slot (top-right), optional full-bleed background layer, and a body for any content.

```tsx
import MetricCard from "@/components/MetricCard";

<MetricCard
  title="Deep Work Time"
  widget={<button>...</button>} // optional — top-right slot
  background={<div className="..." />} // optional — rendered at z-0
  className="border border-neutral-800" // optional — merged onto root div
>
  <p className="text-4xl font-bold text-white mt-auto">1h 25m</p>
</MetricCard>;
```

Hover state: scales to `1.05` and reveals an amber glow shadow, both driven by Tailwind utility classes (no custom CSS).

### `Nav`

Top-level navigation bar. Reads the current pathname via `usePathname()` and applies an active underline indicator to the matching link. No props required — rendered once in `app/layout.tsx`.

### `QueryProvider`

Thin wrapper around `QueryClientProvider`. Creates a fresh `QueryClient` instance per browser session (via `useState`) to prevent cross-request state sharing on the server.

## Design System

Tailwind CSS v4 is configured entirely in `app/globals.css` — there is no `tailwind.config.ts`.

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  --background-image-gradient-radial: radial-gradient(var(--tw-gradient-stops));
  --background-image-gradient-conic: conic-gradient(
    from 180deg at 50% 50%,
    var(--tw-gradient-stops)
  );
}

@custom-variant dark (&:where(.dark, .dark *));
```

**Dark mode** is always active — `<html>` carries the `.dark` class at the root layout level. All components use `dark:` modifiers where needed; most are dark-only and need no light variant.

**Color palette:** neutral-950 backgrounds, neutral-800/900 surfaces, white text, amber-400 accents and focus rings.

**Module alias:** `@/` resolves to the project root, configured in `tsconfig.json`.

## Testing

### Unit tests (Jest)

Tests live in `components/__tests__/` alongside their component.

```bash
pnpm test            # run all unit tests once
pnpm test:watch      # re-run on file changes
```

`next/jest` is used as the transform (SWC compiler), with `jsdom` as the test environment and `@testing-library/jest-dom` matchers loaded globally via `jest.setup.ts`.

`next/navigation` is mocked in `Nav.test.tsx` so `usePathname()` can be controlled per test:

```ts
jest.mock("next/navigation", () => ({ usePathname: jest.fn() }));
jest.mocked(usePathname).mockReturnValue("/about");
```

### E2E tests (Playwright)

Tests live in `tests/` and cover the full browser-rendered pages.

```bash
# Requires the dev server — Playwright starts it automatically
pnpm exec playwright test

# Run a specific browser only
pnpm exec playwright test --project=chromium

# Open the interactive UI mode
pnpm exec playwright test --ui
```

The suite covers: page titles, visible content, metric card hover interactions, keyboard navigation, and console error checks.

> **Firefox note:** `hover:` CSS assertions use `page.addStyleTag` to disable transitions before hovering, ensuring `getComputedStyle` reflects the hovered value synchronously. This avoids a Firefox headless quirk where CSS variable-driven `box-shadow` transitions can stall in `getComputedStyle` during an active transition.

## CI Pipeline

Every push and pull request to `main` runs four jobs in order:

```
lint ──┐
       ├──▶ unit (Jest) ──▶ test (Playwright — chromium, webkit)
commitlint ──┘
```

| Job          | What it checks                                                                      |
| ------------ | ----------------------------------------------------------------------------------- |
| `lint`       | TypeScript (`tsc --noEmit`) + ESLint                                                |
| `commitlint` | Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/) |
| `unit`       | Jest unit tests for all components                                                  |
| `test`       | Playwright E2E across Chromium and WebKit                                           |

Playwright browser binaries are cached by `pnpm-lock.yaml` hash to avoid re-downloading on every run.
