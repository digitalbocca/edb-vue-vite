# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`edb-vue-vite` is a Vue 3 + Vite **starter template** maintained by Estúdio Digital Bocca and distributed via `@digitalbocca/create-edb-app`. The `src/` tree is a gallery of sample components demonstrating the bundled libraries (animated counters, charts, rotating text, circular progress, toasts) rather than a real application. When extending it, follow the existing patterns rather than treating sample components as fixed requirements.

## Toolchain & commands

Runtime is **Node LTS** (`.nvmrc` pins the exact version, `engines.node` pins the major as `26.x`) and the package manager is **npm** (`packageManager: npm@11.20.0`, lockfile `package-lock.json`). Do not use Bun, Deno, yarn or pnpm.

**Why** (decisions 2026-10-31, recorded in `edb-boilerplate-ia/GUARDRAILS.md` §7-8): the template used Bun until then; it was dropped to avoid depending on an alternative runtime backed by a single company (after Deno announced the end of its development). Node is LTS-only (even majors); `engines` uses `26.x` instead of `>=26` because on Vercel `>=` resolves to the newest available major, odd ones included.

Scripts call the binaries directly (no `bun x`/`npx` wrapper); `npx <pkg>@latest` is only for tools that aren't project dependencies.

```bash
npm install            # install dependencies (npm ci for a clean/CI install)
npm run dev            # dev server on http://localhost:8080 (--host enabled)
npm run build          # production build (Vite 8 / Rolldown) -> dist/
npm run lint           # ESLint over src (flat config picks .js/.vue)
npm run test           # Vitest in UI mode (interactive, does NOT exit)
npm run coverage       # headless run + HTML coverage to tests/unit/coverage/
npm run update         # npm outdated
npm run upgrade        # npx npm-check-updates@latest -i (interactive, not a dependency)
npm run md             # npx vue-mess-detector@latest analyze .
```

`npm run test` opens the Vitest UI and stays running. For a one-off headless run or a single file in an agent context, call vitest directly:

```bash
npx vitest run                                   # all tests, headless, exits
npx vitest run src/utils/sum/sum.test.js         # single file
npx vitest run -t 'primary button'               # filter by test name
```

Husky's `pre-push` hook runs the coverage script before every push.

## Linting & formatting

- **ESLint** (`eslint.config.js`, flat config) is the only style gate; `npm run lint` must pass.
- **Why ESLint and not Biome** (decision 2026-10-31, recorded in `edb-boilerplate-ia/GUARDRAILS.md` §1): Vue projects use ESLint; every other stack (Next/React, plain JS/TS, Node) uses Biome. The Vue template rules this project relies on (`vue/max-attributes-per-line`, `vue/html-indent`, `vue/html-self-closing`, `vue/html-closing-bracket-newline`) plus `import-x/order` come from ESLint plugins that Biome's `.vue` support doesn't cover.
- `biome.json` is a leftover (it came in with the 2026-01/02 dependency updates, not by decision). Don't run `biome check --write` here — if its formatting diverges from ESLint, ESLint wins.
- Every file touched in a change should leave lint 100% clean. Rule exceptions go inline (`// eslint-disable-next-line <rule> -- <specific reason>`), never by turning the rule off globally.

Note: the current `main` has pre-existing ESLint errors (a parsing error in the third-party `RotatingText.vue` and trailing-comma/attribute issues in `buttons-bar.vue`). Don't assume a clean baseline; check `git diff` to confirm you didn't introduce new ones.

## Dependency updates

- Apply semver-**compatible** updates first (`npm update`), then validate with `npx vitest run` + `npm run build` + `npm run lint` and commit that batch.
- For each **major** bump, read the changelog/release notes on the web and check whether the project actually hits any breaking change (grep usage in `src/`). Only then apply it. Group safe majors together; give any major that needs code changes its own commit.
- Validate after every batch; never bump a major blind.
- Node version changes go in their own commit (`.nvmrc` + `engines.node` + README together).

### npm gotchas (`.npmrc` has `legacy-peer-deps=true`)

- **Why the flag exists:** `eslint-config-standard` 17.1.0 (latest) declares peers `eslint ^8`, `eslint-plugin-n ^15||^16`, `eslint-plugin-promise ^6`; this project runs eslint 10 / n 18 / promise 7, so `npm install` fails with ERESOLVE without it. It can only go away together with `eslint-config-standard` (migrating the lint base config is an open decision).
- **Side effect:** npm then skips **all** peer dependencies, so required peers of other packages must be declared explicitly in `package.json`, or build/lint breaks. Already declared: `eslint-plugin-import` (peer of `eslint-config-standard`; without it: "ESLint couldn't find the plugin eslint-plugin-import"). `@vue/devtools-api` (peer of Pinia 4) is declared too. Bun installed peers automatically, which is why this didn't show up before.
- **No `overrides` for a package that is also a direct dependency** (npm fails with EOVERRIDE). Use the alias directly in the dependency instead (e.g. `"vite": "npm:rolldown-vite@^7.3.1"`, used here before Vite 8).
- `npm audit` reports moderate issues in transitive deps (glob/minimatch via test-utils and eslint-plugin-import-x) whose only fix is `--force` (downgrades). Don't force; expected to clear with future majors.

## Git commits

- Keep commits **small and atomic** — split unrelated changes into separate commits rather than one large one.
- Use a **short, single-line message** (subject only); no full body/description unless the change genuinely needs explanation.
- Messages in **Portuguese, present tense, no prefix** (`Adiciona X`, `Atualiza Y`, `Remove Z`). Conventional-commit prefixes (`feat:`, `fix:`) were dropped.
- Do **not** add a `Co-Authored-By` trailer.
- Only commit when explicitly asked; don't offer to commit at the end of a task.

## Conventions

- Vue component files use **kebab-case** filenames (`my-component.vue`); the component itself is PascalCase.
- Code comments only in **JSDoc** format, and only for non-obvious logic — see `src/plugins/http/index.js` for the expected density.
- Tests use **Vitest** (never Jest), kept next to the code they test (`*.test.js` colocated), as in `src/components/base/custom-button/custom-button.test.js`. Automated tests are mandatory for business-rule logic (pure functions in `src/utils/`); UI component tests are optional.
- Constants: one file per theme in `src/constants/<theme>.js`, names in `SCREAMING_SNAKE_CASE` prefixed by the theme (`HEX_COLOR_PRIMARY`), each with a JSDoc block; arrays/objects wrapped in `Object.freeze` (see `variants.js`).
- Utils: one folder per util (`src/utils/<name>/index.js` + `<name>.test.js`), re-exported from `src/utils/index.js`.
- Pinia stores: one file per store in `src/stores/`, setup syntax `defineStore('<name>', () => {...})`, exported as `use<Name>Store`; getters are `computed` with a `get` prefix.
- User-facing text uses a plain hyphen (`-`), never an em dash.
- Don't delete contents of `.env` / `.env.local`. Document env vars in `sample.env`.
- Dependencies are managed with npm (`npm install <pkg>` / `npm update`). New runtime dependencies are a meaningful choice for a template — flag them for the maintainer rather than adding silently.

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
- `src/blocks/` — third-party **Vue Bits** components installed via JSRepo (`jsrepo.json` points at `https://vue-bits.dev/ui`, output `./src/blocks`). Add with `npx jsrepo install <component>`. Treat these as vendored code (e.g. `RotatingText.vue` uses syntax the project ESLint can't parse).
- `src/stores/` — Pinia; `src/stores/index.js` creates the pinia instance, individual stores (e.g. `sample.js`) live alongside.
- `src/plugins/http/index.js` — the shared **Ky** HTTP client. `prefix` (Ky v2; formerly `prefixUrl`) comes from `VITE_API_BASE_URL`, 10s timeout, JSON default headers, with `beforeRequest` / `afterResponse` / `beforeError` hook stubs (auth-token and error-logging logic are TODOs to fill in per project).
- `src/styles/` — both `styles.sass` and `styles.css` are imported globally in `main.js`; Tailwind v4 is wired through the `@tailwindcss/vite` plugin (no separate tailwind directives file).

**Build note:** Vite 8 ships Rolldown (Rust-based) as its default bundler, so `vite` is a plain dependency - no `rolldown-vite` alias or `overrides`. Chunk splitting is configured under `build.rolldownOptions` (not `rollupOptions`). The main chunk currently exceeds the 500 kB warning threshold; there is no `manualChunks` splitting configured.

## Environment variables

Copy `sample.env` to `.env`. Only `VITE_*`-prefixed vars reach the client bundle:
- `VITE_API_BASE_URL` — API base URL, no trailing slash (feeds the Ky client).
- `VITE_ENV_EXAMPLE` — sample text shown on the home page.

`VITE_*` vars are baked in at build time. A new one must also be added as `ARG`/`ENV` in the `Dockerfile` build stage, or the deployed bundle won't see it.

## Deploy

Deployed via the `Dockerfile`. It builds with `node:<.nvmrc version>-alpine` (`npm ci` + `npm run build`) and serves `dist/` with `nginx:alpine` on port 80. `nginx.conf` falls back to `index.html` (router uses history mode) and caches hashed `/assets/` as immutable. Nixpacks is not an option: it is in maintenance, tops out at Node 24 and silently falls back to Node 18 on `26.x`.

When bumping Node, update the `Dockerfile` `FROM` tag together with `.nvmrc`, `engines.node` and README (GUARDRAILS §7).
