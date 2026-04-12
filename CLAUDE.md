@AGENTS.md

# CLAUDE.md

This file gives Claude context about the project so it can provide better assistance.

## Project Overview

<!-- Describe what this project is and what it does -->

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Package Manager:** npm
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
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint
```

## Notes for Claude

<!-- Anything else Claude should know when working on this project -->
<!-- e.g. design decisions, things to avoid, preferred patterns -->

## 🔍 Documentation & Onboarding

- Each component and hook should include a short comment on usage
- Document top-level files (like `app/layout.tsx`) and configs
- Keep `README.md` up to date with getting started, design tokens, and component usage notes

## 🔐 Security

- Validate all server-side inputs (API routes)
- Use HTTPS-only cookies and CSRF tokens when applicable
- Protect sensitive routes with middleware or session logic