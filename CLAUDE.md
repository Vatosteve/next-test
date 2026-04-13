@AGENTS.md

# CLAUDE.md

This file gives Claude context about the project so it can provide better assistance.

## Project Overview

<!-- Describe what this project is and what it does -->

## Commands

```bash
pnpm run dev      # Start development server
pnpm run build    # Production build
pnpm run lint     # Run ESLint
```

## Project Structure

```
app/            # Application Pages
components/     # All project components stored here
hooks/          # Shared hook library
data/           # API Request definition here
utils/          # Utility support files
tests/          # Playwright Test Files
public/         # Application Assets
```

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Package Manager:** pnpm
- **Testing Library:** Playwright

## Working Guildelines

### 1. Development Planning

1. First think through the problem and read relavant codebase files
2. Write a plan to tasks/todo.md with checkable todo items
3. Check in with user for plan verification before starting
4. Work on todo items, marking them complete as you go
5. Provide high-level explanations of changes at each step
6. Add a review section to todo.md summarizing changes

### 2. Code Simplicity Principles

- Make every change as simple as possible
- Avoid massive or complex changes
- Each change should impact minimal code
- Prefer incremental improvements over rewrites

### 3. Adding Dependenceis

- Check if functionality exists in current deps first
- Prefer well-maintained, small packages
- Always use `pnpm add` (not npm/yarn)

### 4. Test Implementation

- Always create unit tests for `components/`
- Adjust unit tests when making changes to `components/`
- Always create E2E tests for newly added functionality
- Adjust E2E tests appropriately when functionality changes

## Coding Conventions

<!-- Describe any conventions the project follows, e.g.: -->
<!-- - Prefer server components unless interactivity is needed -->
<!-- - File naming: PascalCase for components, kebab-case for routes -->

- CSS: Tailwind utility classes only, no custom CSS unless necessary
- Variables: Treat all variables as immutable wherever possible
- Imports: Use Modules Path Aliases when importing components
- Commits: Follow Conventional Commits guidelines for commit messages

## Style Conventions

You are an expert Tailwind CSS v4 developer. Follow these rules strictly:

1. **Version:** Use Tailwind CSS v4 syntax only. Use CSS-first configuration (`@theme { ... }` in your main CSS file) instead of `tailwind.config.js`.
2. **Framework:** Use utility classes directly in components. Avoid `@apply` unless absolutely necessary for component library overrides.
3. **Design System:** Use specific theme values for colors, spacing, and typography (e.g., `text-sm`, `p-4`, `bg-primary`) defined in the CSS theme. Do not use arbitrary values like `h-[500px]` unless authorized.
4. **Mobile-First:** Write classes for mobile first, using `md:`, `lg:` for larger screens.
5. **Dark Mode:** Enable dark mode using the `.dark` selector strategy. Use `dark:` modifiers for all components.
6. **Interaction:** Ensure accessible `:hover`, `:focus-visible`, and `:active` states.
7. **Refactoring:** If a component is too complex, componentize it, but prefer keeping Tailwind classes in the markup for readability.
8. **Components:** If asked for a component, assume React/JSX and use `tailwind-merge` (`cn()`) for handling class conflicts.

## Testing & Validation

Before committing any changes:

1. Run `pnpm run lint` - fix any linting errors
2. Run `npx tsc` - ensure TypeScript types are correct

## Performance Optimizations

### Frontend Performance

- user React.memo for expensive components
- Implement proper loading states
- Optimize image with Next.js Image Components
- Use dynamic imports for heavy components

## 🔍 Documentation & Onboarding

- Each component and hook should include a short comment on usage
- Document top-level files (like `app/layout.tsx`) and configs
- Keep `README.md` up to date with getting started, design tokens, and component usage notes

## 🔐 Security

- Validate all server-side inputs (API routes)
- Use HTTPS-only cookies and CSRF tokens when applicable
- Protect sensitive routes with middleware or session logic

## Boundaries

✅ Always

- Run tests before committing
- Use TypeScript strict mode
- Components to to be written in the components/ directory
- Prefer Next

❌ Never

- Commit secrets or credentials
- Delete failing tests
- Commit to `main` branch

## Known Gotchas

_Add lessonslearned here as you encounter them_
