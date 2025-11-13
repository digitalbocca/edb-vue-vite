# Project Overview

This is a Vue 3 project bootstrapped with `edb-vue-vite`. It uses Vite as a build tool and Bun as the package manager. The project is configured with a rich set of tools for development, testing, and code quality, including:

- **Framework:** Vue 3
- **Build Tool:** Vite with Rolldown
- **Package Manager:** Bun
- **Styling:** Tailwind CSS v4, Sass
- **State Management:** Pinia
- **Routing:** Vue Router
- **Testing:** Vitest, Vue Test Utils
- **Linting:** ESLint
- **Animations:** motion-v, @formkit/auto-animate
- **Component Libraries:** Vue Bits, Tabler Icons

The project includes a variety of sample components demonstrating features like advanced text animations, real-time clocks, animated counters, circular progress bars, and interactive charts.

# Building and Running

## Development

To start the development server, run:

```bash
bun run dev
```

The application will be available at `http://localhost:8080`.

## Build

To create a production build, run:

```bash
bun run build
```

The production files will be generated in the `dist/` directory.

## Testing

To run the tests with a graphical interface, use:

```bash
bun run test
```

To generate a test coverage report, run:

```bash
bun run coverage
```

The coverage report will be available in the `tests/unit/coverage/` directory.

# Development Conventions

## Code Style

The project uses ESLint to enforce a consistent code style. To check the code for linting errors, run:

```bash
bun run lint
```

## Git Hooks

The project uses Husky to manage Git hooks. A `pre-push` hook is configured to run tests before pushing to the remote repository.

## Component Management

The project is configured to use components from Vue Bits via JSRepo. To install a new component, run:

```bash
bunx jsrepo install <component-name>
```

To list available components, run:

```bash
bunx jsrepo list
```

To update installed components, run:

```bash
bunx jsrepo update
```
