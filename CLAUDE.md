# CLAUDE.md — Abrigo Animal Joinville

## Stack

- **Astro 6** — static site generator, pages in `src/pages/`, file-based routing
- **Tailwind CSS v4** — via `@tailwindcss/vite`, configured in `src/styles/global.css` with custom tokens under `@theme`
- **Fonts** — Fraunces (`--font-display`) and Inter (`--font-body`), loaded via `astro:fonts` (Google Fonts provider)
- **Node.js ≥ 22**

## Project structure

```
src/
  assets/          # Images processed by Astro's image pipeline (<Image> component)
  components/
    Header.astro   # Sticky navbar with logo and nav links
    Footer.astro   # Footer with brand name and nav links (no logo)
  content/
    animals/       # MDX entries for individual animals (not yet in use)
    pages/         # Markdown content for CMS-driven pages (not yet in use)
  content.config.ts
  layouts/
    Layout.astro   # Root layout: injects fonts, Header, Footer, global CSS
  pages/           # One .astro file per route (index, adote, sobre, contato, ajudar, caofilhado)
  styles/
    global.css     # @theme tokens, base resets

public/            # Served as-is, no processing
  favicon.png
  logo-abrigo-animal.png   # Logo served via plain <img>, bypasses Astro optimization
  ficha-apadrinhamento.pdf # Sponsorship form for Projeto Cãofilhado — downloadable by visitors

tests/             # Node.js test runner, runs against dist/ after astro build
  *.test.mjs

docs/design/pages/ # Per-page design specs (Markdown)
```

## Commands

| Command       | Description                            |
|---------------|----------------------------------------|
| `npm run dev` | Dev server at localhost                |
| `npm test`    | `astro build` then Node.js test runner |
| `npm run check` | Astro type check                     |

CI runs `npm run check` and `astro build` on every PR targeting `main`.

## Design tokens

Defined in `src/styles/global.css`:

| Token                | Value     | Usage               |
|----------------------|-----------|---------------------|
| `--color-linen`      | `#F2EFE8` | Primary bg          |
| `--color-warm-white` | `#FCFAF3` | Secondary bg, cards |
| `--color-sage`       | `#6F8B5A` | Primary accent      |
| `--color-deep-moss`  | `#3A4A34` | Dark accent         |
| `--color-ink`        | `#2A332F` | Body text           |
| `--color-honey`      | `#D1A24C` | Highlight accent    |

Sections alternate between `bg-[#F2EFE8]` (linen) and `bg-[#FCFAF3]` (warm-white).

## Naming conventions

### Assets — kebab-case required

**All files added to `src/assets/` or `public/` must be named in kebab-case.**

```
# Correct
dog-01.jpg
cat-03.png
fachada-abrigo.jpg
logo-abrigo-animal.png

# Wrong — rename before committing
Dog05.jpg
Gatinho03.jpg
biscoito.PNG
myPhoto.jpeg
```

Current asset naming pattern for animal photos:
- `dog-01`, `dog-02`, … — dogs
- `cat-01`, `cat-02`, … — cats

When adding a new animal photo, continue the sequence.

## Logo

The logo (`public/logo-abrigo-animal.png`) is served via a plain `<img>` tag in `Header.astro`, **not** through Astro's `<Image>` component. This is intentional — Astro's optimization pipeline degrades the logo quality. Do not change this to `<Image>`.

## Tests

Tests live in `tests/*.test.mjs` and run with the Node.js built-in test runner against the built output in `dist/`. Tests assert on rendered HTML content — they do not test components, props, or implementation details.

- Page tests: one file per route (e.g. `tests/adote.test.mjs`), reads `dist/<page>/index.html`
- Shared component tests: `tests/header.test.mjs` reads `dist/index.html` and asserts on markup present in every page (e.g. mobile menu structure, aria attributes)

To add tests, create `tests/<name>.test.mjs` and add it to the `test` script in `package.json`.
