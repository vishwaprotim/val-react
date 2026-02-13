# Copilot Instructions for val-react

## Project Overview
This is a **React + Vite** web application with JSX components. It uses React 19.2.0 as the main dependency and Vite as the build tool. The project follows a minimal, template-based structure suitable for rapid prototyping and development.

## Architecture & Key Files
- **Entry point**: `src/main.jsx` — renders the `App` component into the DOM with `StrictMode`
- **Root component**: `src/App.jsx` — main React component using hooks (e.g., `useState`)
- **Styling**: `src/index.css` (global) and `src/App.css` (component-specific)
- **Assets**: `src/assets/` holds static files like `react.svg`
- **Build config**: `vite.config.js` — minimal Vite setup with React plugin for JSX support and Fast Refresh

## Developer Workflows

### Starting Development
```bash
npm run dev
```
Launches Vite dev server with **Hot Module Replacement (HMR)**. Edit `src/App.jsx` and changes appear instantly.

### Building for Production
```bash
npm run build
```
Creates optimized bundle in `dist/` directory.

### Code Quality
```bash
npm lint
```
Runs ESLint using the flat config format. Ignores the `dist` directory.

### Preview Built App
```bash
npm run preview
```
Serves the production build locally for testing.

## Coding Patterns & Conventions

### ESLint Rules
- **React Hooks**: Enforced via `eslint-plugin-react-hooks` — use hooks rules (Dependencies, Rules of Hooks)
- **React Refresh**: Required when modifying component definitions; use `eslint-plugin-react-refresh`
- **Unused variables**: Allowed if they follow `PascalCase` or start with `_` (e.g., `MyComponent`, `_unused`)

### Component Structure
- Write components as JSX files (`.jsx` extension)
- Use React hooks (`useState`, `useEffect`, etc.) for state and side effects
- Import CSS files directly in components for scoped styling (e.g., `import './App.css'`)
- Import static assets relative to the component file (e.g., `import reactLogo from './assets/react.svg'`)

### Fast Refresh Constraints
- Components must be valid JSX exports or named exports
- Avoid exporting non-React values from component files
- Side effects at the top level may not hot-reload properly

## Dependencies & Tooling
- **React**: `^19.2.0` — latest React with type hints via `@types/react`
- **React DOM**: `^19.2.0` — for rendering
- **Vite**: `^7.3.1` — fast build tool with JSX support
- **ESLint**: Configured with React rules; no TypeScript yet
- **Babel/SWC**: Handled by `@vitejs/plugin-react` (uses Babel by default, or SWC if available)

## Cross-Component Communication
Currently, this template uses a simple component tree with `props` and `useState` hooks. For larger features:
- **Local state**: Use `useState` for component-level state
- **Shared state**: Lift state up to parent components or consider context/state management libraries
- **Side effects**: Use `useEffect` with proper dependency arrays

## Notes for AI Agents
- This is a starter template; many production patterns are not yet implemented
- No TypeScript, routing, or state management libraries are configured—suggest these when building larger features
- HMR makes rapid iteration possible; encourage testing changes immediately
- The ESLint config is minimal; focus on React best practices and hook rules
