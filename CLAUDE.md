# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`edb-vue-vite` is a Vue 3 + Vite **starter template** maintained by Estúdio Digital Bocca and distributed via `@digitalbocca/create-edb-app`. The `src/` tree is a gallery of sample components demonstrating the bundled libraries (animated counters, charts, rotating text, circular progress, toasts) rather than a real application. When extending it, follow the existing patterns rather than treating sample components as fixed requirements.

## Toolchain & commands

The package manager and runtime is **Bun** (`>=1.3`, Node `>=24`). Scripts wrap `bun x`; do not substitute npm/yarn for install or dev.

```bash
bun install            # install dependencies
bun run dev            # dev server on http://localhost:8080 (--host enabled)
bun run build          # production build via rolldown-vite -> dist/
bun run lint           # ESLint over src (.js,.vue)
bun run test           # Vitest in UI mode (interactive, does NOT exit)
bun run coverage       # headless run + HTML coverage to tests/unit/coverage/
```

`bun run test` opens the Vitest UI and stays running. For a one-off headless run or a single file in an agent context, call vitest directly:

```bash
bun x vitest run                                   # all tests, headless, exits
bun x vitest run src/utils/sum/sum.test.js         # single file
bun x vitest run -t 'primary button'               # filter by test name
```

Husky's `pre-push` hook runs the coverage script before every push.

## Linting & formatting — two tools coexist

- **ESLint** (`eslint.config.js`, flat config) is the authoritative style gate; `bun run lint` must pass.
- **Biome** (`biome.json`) is also configured (single quotes, no semicolons, 2-space, organize-imports). Its formatting choices can diverge from ESLint rules — when they conflict, ESLint wins for committed code.

Note: the current `main` has pre-existing ESLint errors (a parsing error in the third-party `RotatingText.vue` and trailing-comma/attribute issues in `buttons-bar.vue`). Don't assume a clean baseline; check `git diff` to confirm you didn't introduce new ones.

## Dependency updates

- Apply semver-**compatible** updates first (`bun update`), then validate with `bun x vitest run` + `bun run build` and commit that batch.
- For each **major** bump, read the changelog/release notes on the web and check whether the project actually hits any breaking change (grep usage in `src/`). Only then apply it. Group safe majors together; give any major that needs code changes its own commit.
- Validate after every batch; never bump a major blind.

## Git commits

- Keep commits **small and atomic** — split unrelated changes into separate commits rather than one large one.
- Use a **short, single-line message** (subject only); no full body/description unless the change genuinely needs explanation.
- Do **not** add a `Co-Authored-By` trailer.

## Conventions

- Vue component files use **kebab-case** filenames (`my-component.vue`); the component itself is PascalCase.
- Code comments only in **JSDoc** format, and only for non-obvious logic — see `src/plugins/http/index.js` for the expected density.
- Tests use **Vitest** (never Jest), kept next to the code they test (`*.test.js` colocated), as in `src/components/base/custom-button/custom-button.test.js`.
- Don't delete contents of `.env` / `.env.local`. Document env vars in `sample.env`.
- Dependencies are managed with Bun (`bun add` / `bun update`). New runtime dependencies are a meaningful choice for a template — flag them for the maintainer rather than adding silently.

## Architecture

Entry is `src/main.js`, which registers all global plugins on the app instance: router, Pinia store, auto-animate, notivue (toasts, configured bottom-right), vue3-apexcharts, z-vue-scan (re-render debugger), and vue-ellipse-progress. Adding a global plugin means wiring it here.

**Path alias:** `@` → `./src` (defined in `vite.config.js` and used everywhere — prefer it over relative imports). Vitest config also lives inside `vite.config.js` (`test` key), so there is no separate vitest config file.

**Barrel-export structure.** Base components and constants are consumed through index re-exports, not deep paths:
- `src/components/base/<name>/index.js` re-exports the `.vue` (e.g. `custom-button`, `input/text-input`, `badges/*`, `stats`). Import as `@/components/base/custom-button`.
- `src/constants/index.js` aggregates `variants`, `hex-colors`, `progress-colors`, `magic-numbers-collection`, `default-env-text`. Import shared constants from `@/constants`, not the individual file.
- `src/utils/index.js` is the utils barrel.

**Layers:**
- `src/views/` — route page components; `src/router/routes.js` defines routes with lazy `() => import()`, `src/router/index.js` builds the router.
- `src/components/` — feature/demo components; `src/components/base/` — reusable primitives (buttons, inputs, badges, stats); `src/components/icons/` — SVG icon components.
- `src/blocks/` — third-party **Vue Bits** components installed via JSRepo (`jsrepo.json` points at `https://vue-bits.dev/ui`, output `./src/blocks`). Add with `bunx jsrepo install <component>`. Treat these as vendored code (e.g. `RotatingText.vue` uses syntax the project ESLint can't parse).
- `src/stores/` — Pinia; `src/stores/index.js` creates the pinia instance, individual stores (e.g. `sample.js`) live alongside.
- `src/plugins/http/index.js` — the shared **Ky** HTTP client. `prefixUrl` comes from `VITE_API_BASE_URL`, 10s timeout, JSON default headers, with `beforeRequest` / `afterResponse` / `beforeError` hook stubs (auth-token and error-logging logic are TODOs to fill in per project).
- `src/styles/` — both `styles.sass` and `styles.css` are imported globally in `main.js`; Tailwind v4 is wired through the `@tailwindcss/vite` plugin (no separate tailwind directives file).

**Build note:** `package.json` overrides `vite` with `npm:rolldown-vite@latest`, so builds run the Rust-based Rolldown bundler. The main chunk currently exceeds the 500 kB warning threshold; there is no `manualChunks` splitting configured.

## Environment variables

Copy `sample.env` to `.env`. Only `VITE_*`-prefixed vars reach the client bundle:
- `VITE_API_BASE_URL` — API base URL, no trailing slash (feeds the Ky client).
- `VITE_ENV_EXAMPLE` — sample text shown on the home page.
