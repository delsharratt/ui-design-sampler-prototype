# UI Design Sampler – Contributor Guide

Welcome! This guide outlines how to get started with local development, understand the project structure, and contribute effectively.

## Getting Started

### 1. Clone the repo

```
git clone [your-repo-url]
cd ui-design-sampler-prototype
```

### 2. Install dependencies

```
npm install
```

### 3. Run the development server

```
npm run dev
```

Visit http://localhost:3000 to view the app.

## Run Linting and Formatting

- Lint the codebase:

```
npm run lint
```

- Auto-fix lint and format issues:

```
npm run lint:fix
```

These commands use <b>ESLint</b> and <b>Prettier</b>, with rules configured for React, TypeScript, and Tailwind.

## Git Commit Hooks

This repo uses husky and lint-staged to enforce code quality before commits:

- Runs eslint and prettier on staged files
- Validates commit messages using Conventional Commits

### First-time setup (after cloning):

```
npm run prepare
```

## Folder Structure

The repository is organized by component first, then by UI library:

```
/components/ui/[component]/
  [LibraryComponent].tsx         # e.g., DaisyButton.tsx
  [Component]Renderer.tsx        # Handles which library to render
  [Component]Wrapper.tsx         # Manages props + layout for preview

/shared/
  form/                          # Reusable form controls
  layout/                        # Grid/panel layout components
  theme/                         # Theming + transition boundaries
```

## Stack

- <b>Framework:</b> Next.js (App Router)
- <b>Styling:</b> Tailwind CSS v4
- <b>Libraries Previewed:</b> [ShadCN/UI](https://ui.shadcn.com/) & [Material UI](https://mui.com/material-ui/) (MUI)
  & [DaisyUI](https://daisyui.com/)

Styling: Tailwind CSS v4

Libraries previewed: DaisyUI, Material UI, ShadCN

Tools: ESLint, Prettier, Husky, Commitlint

✅ Contributing Tips

Keep form logic generic and delegate prop-specific logic to wrapper components.

Reuse shared layout components when possible.

When adding a new UI library or component, follow the existing pattern:

[Library][Component].tsx

[Component]Wrapper.tsx

Add form config to useFormMap()

✨ Future Contributions

Interested in adding:

Component code preview/copy

A persistent style/theme saver

Per-library documentation and links

PRs are welcome!
