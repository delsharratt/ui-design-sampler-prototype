# Next.js UI Design Sampler – Dev Summary

This Next.js app is a single-user prototype designed to preview and customize UI components across multiple libraries. It supports live editing of component props like `variant`, `size`, `color`, and layout modifiers using dynamic forms. The tool serves to compare component APIs and usage between libraries, which can assist in the decision-making process when designing a new app as a developer.

## Stack

- <b>Framework:</b> [Next.js](https://nextjs.org/) (App Router, TypeScript)
- <b>Styling:</b> Tailwind CSS v4
- <b>Libraries Previewed:</b>
  - [ShadCN/UI](https://ui.shadcn.com/)
  - [Material UI](https://mui.com/material-ui/) (MUI)
  - [DaisyUI](https://daisyui.com/)
  - <b>Planned:</b> Chakra, Bootstrap, Ant Design, Flowbite

## Folder Structure

```
/components/ui/[component]/
  [LibraryName][Component].tsx      # Pure renderer (e.g. MaterialButton.tsx)
  [Component]Renderer.tsx           # Library switch logic
  [Component]Wrapper.tsx            # Manages state + form layout

/shared/
  form/
    FormDropdown.tsx
    FormToggle.tsx
    useFormMap.ts
  layout/
    FormPanel.tsx
    FormColumnPanel.tsx
    PreviewLayout.tsx
  theme/
    MaterialThemeProvider.tsx
    TransitionWrapper.tsx
```

## Implemented Features

- 2-column customization form with shared layout components
- Theme-aware MUI rendering (`darkTheme`) with `ThemeProvider`
- Dynamic form rendering using `useFormMap()`
- Component preview output wrapped in `PreviewLayout` and `FormPanel`

## Tooling Setup

- <b>Linting:</b> ESLint (.eslintrc.js) with React + TypeScript + JSX A11y
- <b>Formatting:</b> Prettier + eslint-config-prettier
- <b>Git Hooks:</b>
  - `husky` for pre-commit
  - `lint-staged` for `eslint --fix` + `prettier --write`
  - `commitlint` with [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

```
npm run lint        # Lint codebase
npm run lint:fix    # Auto-fix lint + format
```

## Project Goals

- Deepen understanding of Tailwind utility-first design
- Build reusable, library-agnostic form layouts and wrappers
- Compare component APIs and usage between UI systems
- Optionally expand to support saving presets and themes per user

## Future Enhancements

- Code preview + copy functionality
- Snapshotting or saving component configurations
- Visual theme switcher for previewing dark/light modes
- Registry-driven metadata for supported props per component
