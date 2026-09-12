# Dynamogic Docs

**One-line pitch:** Markdown → print-ready PDF with soft paper craft — free core convert; Pro brand kits, templates, and agent delivery.

Vera classical premium · Inter UI · JetBrains Mono only in MD stage · folded-page mark.

| | |
|---|---|
| **Product** | Dynamogic Docs — MD → PDF |
| **Suite** | [OS](https://mtaqys.github.io/dynamogic/) · [BePro](https://mtaqys.github.io/bepro/) · Docs |
| **Future URL** | `docs.dynamogic.com` |
| **Pages (now)** | `https://mtaqys.github.io/docs/` (basePath `/docs`) |

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 3** — paper tokens (`#FAFAF8` / `#2A2A28`), Inter 400–700, JetBrains Mono in MD pane only
- **Static export** via `output: 'export'` when `STATIC_EXPORT=1` (basePath `/docs`)

No backend — waitlist is `mailto:` only.

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

## Brand notes (Vera classical freeze)

- Inter only for UI (weights 400/500/600, max 700). JetBrains Mono **only** in MD stage + one code line.
- Quiet Inter kickers (`text-sm text-fg-muted`) — no uppercase mono tracking.
- Left hero, bigger MD\|PDF stage, horizontal how-it-works, editorial features (≤4), quiet 2-col pricing.
- Motion: opacity + 6px Y, 200–280ms, ease `[0.22,1,0.36,1]`, once. No fog / loops / gradients.
- Flat CTAs `#2A2A28`. Radius 8–10. Soft paper shadows.
- Suite strip: **OS · BePro · Docs**.

## License

Private / suite product. © Dynamogic.
