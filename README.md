# Dynamogic Docs

**One-line pitch:** Markdown → print-ready PDF with soft paper craft — free core convert; Pro Brand Layer, templates, and agent delivery.

Soft paper aesthetic · charcoal · Inter + JetBrains Mono · folded-page mark.

| | |
|---|---|
| **Product** | Dynamogic Docs — MD → PDF |
| **Suite** | [Dynamogic](https://mtaqys.github.io/dynamogic/) · [BePro](https://mtaqys.github.io/bepro/) |
| **Future URL** | `docs.dynamogic.com` |
| **Pages (now)** | `https://mtaqys.github.io/docs/` (basePath `/docs`) |

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 3** — Dynamogic tokens (`bg` `#FAFAF8`, CTA `#2A2A28`, Inter / JetBrains Mono)
- **Static export** via `output: 'export'` when `STATIC_EXPORT=1` (basePath `/docs` for project Pages)

No backend on this marketing site — waitlist is `mailto:` placeholder.

## Local dev

```bash
npm install
npm run dev
# http://localhost:3000
```

## Static build (GitHub Pages)

```bash
npm run build:pages
# → out/ with basePath /docs and .nojekyll
```

### Pages checklist

1. Host `out/` at `*.github.io/docs/` (or repo Pages with basePath `/docs`).
2. For custom domain (`docs.dynamogic.com`), set empty `basePath` in `next.config.ts` and add a `CNAME` in `out/`.

## Project layout

```
app/           layout + page + globals
components/    Navbar, Hero, ProductStage, HowItWorks, Features, Pricing, SuiteStrip, Waitlist, Footer, Logo
public/        favicon.svg, mark.svg
out/           static export after build:pages
```

## Brand notes

- Match Dynamogic soft light premium — **not** Seam colors/copy, **not** purple AI sludge.
- Free: MD → PDF. Pro (~$15/mo placeholder): Brand Layer kits, templates, MCP delivery.
- Suite strip: Brand Layer · BePro · Docs.

## License

Private / suite product. © Dynamogic.
