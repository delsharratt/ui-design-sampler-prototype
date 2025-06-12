![License](https://img.shields.io/github/license/delsharratt/nextjs-ui-design-sampler.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/delsharratt/nextjs-ui-design-sampler.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/delsharratt/nextjs-ui-design-sampler.svg?style=flat-square)
![LAST_COMMIT](https://img.shields.io/github/last-commit/delsharratt/nextjs-ui-design-sampler.svg?style=flat-square)

# Next.js UI Design Sampler

A prototyping tool that lets you preview, customize, and compare UI components from multiple
libraries — including Material UI, ShadCN/UI, and DaisyUI. The app supports real-time prop
manipulation, layout switching, and theming to explore how different systems implement component
APIs.

Component props like `variant`, `size`, `color` can be customized and previewed using dynamic forms,
which can help to support decision-making when designing a new app as a developer..

### 🔗 [Preview Live!](https://ui-design-sampler-prototype.vercel.app/) <i>(WORK IN PROGRESS)</i>

## Tech Stack & Libraries

- <b>Framework:</b> [Next.js](https://nextjs.org/) (App Router, TypeScript)
- <b>Styling:</b> Tailwind CSS v4
- <b>Core UI Library:</b> ShadCN
- <b>Tooling:</b> ESLint, Prettier, Husky, Commitlint
- <b>Libraries Previewed:</b>

  - [ShadCN/UI](https://ui.shadcn.com/)
  - [Material UI](https://mui.com/material-ui/) (MUI)
  - [DaisyUI](https://daisyui.com/)
  - <b>Planned:</b> Chakra, Bootstrap, Ant Design, Flowbite

## Setup Instructions

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

## Project Goals

- Deepen understanding of Tailwind utility-first design
- Build reusable, library-agnostic form layouts and wrappers
- Compare component APIs and usage between UI systems
- Optionally expand to support saving presets and themes per user

## Features

### Library Switching

- Toggle between ShadCN/UI, MUI, and DaisyUI
- Uses dynamic imports with lazy loading for performance

### Component Rendering

- Renders a default preview of each library's component
- Updates live as props are changed with the customization form

### Customization Interface

- Dynamic forms built from per-library config files
- Shared form controls (`FormDropdown`, `FormToggle`) for consistent UX

### Layout & Theming

- Two-column layout form (`FormWrapper`, `FormColumnPanel`)
- Theme-aware rendering with `ThemeProvider` and `darkTheme` prop

## Folder Structure

The repository is organized by component first, then by UI library:

```
/components/
  ui/[component]/
      index.tsx                     # Library switch logic for component preview renderer
      form.tsx                      # Library switch logic for component customization form
      [library]/index.tsx           # Library-specific component preview
      [library]/form.tsx            # Library-specific component customization form
      [library]/config.ts           # Library-specific configuration for component props

  shared/
    form/
      FormField.tsx                 # Base form field component (with rendering logic)
      FormDropdown.tsx
      FormToggle.tsx
    layout/
      FormColumnPanel.tsx
      FormWrapper.tsx
    theme/
      [Library]ThemeProvider.tsx

/core/
  consts/
    [library].ts                    # Constants for each library (e.g. colors + sizes)
  system/
    componentRegistry.ts            # Registry of component renderers and forms
    uiLibraries.ts                  # List of supported UI libraries
    useLibrary.ts                   # Hook to manage library switching
```

## Future Updates

- Code preview + copy functionality
- Snapshotting or saving component configurations
- Visual theme switcher for previewing dark/light modes
- Registry-driven metadata for supported props per component

## Tooling Setup

This project uses ESLint, Prettier, Husky, and Commitlint to enforce code quality.

- <b>Linting:</b> ESLint (.eslintrc.js) with React + TypeScript + JSX A11y
- <b>Formatting:</b> Prettier via `eslint-config-prettier`
- **Git Hooks:** Set up with `husky` and `lint-staged` to:
  - Runs `eslint` and `prettier` on staged files
  - Validates commit messages using
    [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

### Linting & Formatting

```
npm run lint          # Check for linting issues
npm run lint:fix      # Auto-fix issues + format code
npm run prepare       # Setup Husky hooks after cloning (first time setup)
```

These commands use <b>ESLint</b> and <b>Prettier</b>, with rules configured for React, TypeScript,
and Tailwind.

## License

This project is licensed under the [MIT License](LICENSE).
