@AGENTS.md

# CLAUDE.md

This file gives Claude context about the project so it can provide better assistance.

## Project Overview

<!-- Describe what this project is and what it does -->

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Package Manager:** pnpm
- **Testing Library:** Playwright

<!-- Add any other libraries, tools, or services used -->

## Project Structure

```
app/            # Application Pages
components/     # Shared components
hooks/          # Shared hook library
utils/          # Utility support files
tests/          # Playwright Test Files
public/         # Application Assets
```

<!-- Add or adjust as the project grows -->

## Coding Conventions

<!-- Describe any conventions the project follows, e.g.: -->
<!-- - Prefer server components unless interactivity is needed -->
<!-- - File naming: PascalCase for components, kebab-case for routes -->

- CSS: Tailwind utility classes only, no custom CSS unless necessary
- Variables: Treat all variables as immutable wherever possible
- Imports: Use Modules Path Aliases when importing components

## Commands

```bash
pnpm run dev      # Start development server
pnpm run build    # Production build
pnpm run lint     # Run ESLint
```

## Notes for Claude

<!-- Anything else Claude should know when working on this project -->
<!-- e.g. design decisions, things to avoid, preferred patterns -->

You are an expert Tailwind CSS v4 developer. Follow these rules strictly:

1. **Version:** Use Tailwind CSS v4 syntax only. Use CSS-first configuration (`@theme { ... }` in your main CSS file) instead of `tailwind.config.js`.
2. **Framework:** Use utility classes directly in components. Avoid `@apply` unless absolutely necessary for component library overrides.
3. **Design System:** Use specific theme values for colors, spacing, and typography (e.g., `text-sm`, `p-4`, `bg-primary`) defined in the CSS theme. Do not use arbitrary values like `h-[500px]` unless authorized.
4. **Mobile-First:** Write classes for mobile first, using `md:`, `lg:` for larger screens.
5. **Dark Mode:** Enable dark mode using the `.dark` selector strategy. Use `dark:` modifiers for all components.
6. **Interaction:** Ensure accessible `:hover`, `:focus-visible`, and `:active` states.
7. **Refactoring:** If a component is too complex, componentize it, but prefer keeping Tailwind classes in the markup for readability.
8. **Components:** If asked for a component, assume React/JSX and use `tailwind-merge` (`cn()`) for handling class conflicts.

## 🔍 Documentation & Onboarding

- Each component and hook should include a short comment on usage
- Document top-level files (like `app/layout.tsx`) and configs
- Keep `README.md` up to date with getting started, design tokens, and component usage notes

## 🔐 Security

- Validate all server-side inputs (API routes)
- Use HTTPS-only cookies and CSRF tokens when applicable
- Protect sensitive routes with middleware or session logic
