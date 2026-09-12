import { Reveal } from "./motion/Reveal";

const mdLines: { n: number; parts?: { t: string; c?: string }[] }[] = [
  {
    n: 1,
    parts: [
      { t: "# ", c: "text-fg-muted" },
      { t: "Q3 Product Brief", c: "text-fg font-medium" },
    ],
  },
  { n: 2 },
  {
    n: 3,
    parts: [
      { t: "## ", c: "text-fg-muted" },
      { t: "Summary", c: "text-fg" },
    ],
  },
  {
    n: 4,
    parts: [{ t: "Ship brand-aware PDFs from any agent.", c: "text-fg" }],
  },
  { n: 5 },
  {
    n: 6,
    parts: [
      { t: "## ", c: "text-fg-muted" },
      { t: "Goals", c: "text-fg" },
    ],
  },
  {
    n: 7,
    parts: [
      { t: "- ", c: "text-fg-muted" },
      { t: "One-click MD → PDF", c: "text-fg" },
    ],
  },
  {
    n: 8,
    parts: [
      { t: "- ", c: "text-fg-muted" },
      { t: "Persistent brand kit", c: "text-fg" },
    ],
  },
  {
    n: 9,
    parts: [
      { t: "- ", c: "text-fg-muted" },
      { t: "MCP delivery for agents", c: "text-fg" },
    ],
  },
  { n: 10 },
  { n: 11, parts: [{ t: "```ts", c: "text-fg-muted" }] },
  {
    n: 12,
    parts: [{ t: "await docs.render({ md, brand })", c: "text-fg" }],
  },
  { n: 13, parts: [{ t: "```", c: "text-fg-muted" }] },
];

export function ProductStage() {
  return (
    <section id="stage" className="relative pb-12 sm:pb-16" aria-label="Product preview">
      <div className="site-wrap">
        <Reveal>
          <div className="relative mx-auto max-w-6xl">
            <div className="overflow-hidden rounded-lg border border-border bg-bg-paper shadow-stage">
              <div className="flex items-center justify-between border-b border-border bg-bg-muted px-4 py-3 sm:px-5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D4D3CE]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D4D3CE]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D4D3CE]" />
                </div>
                <p className="text-sm text-fg-muted">Docs · live preview</p>
                <span className="rounded-md bg-invert-bg px-2.5 py-1 text-[11px] font-medium text-invert-fg">
                  MD → PDF
                </span>
              </div>

              <div className="grid lg:grid-cols-2">
                <div className="border-b border-border lg:border-b-0 lg:border-r">
                  <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                    <span className="text-sm text-fg-muted">brief.md</span>
                    <span className="text-[11px] text-fg-muted">Source</span>
                  </div>
                  {/* JetBrains Mono ONLY here in the MD pane */}
                  <div className="md-gutter max-h-[28rem] overflow-hidden bg-[#FBFBFA] p-4 font-mono text-[12.5px] leading-[1.55rem] sm:max-h-[32rem] sm:p-6 sm:text-[13.5px]">
                    {mdLines.map((line) => (
                      <div key={line.n} className="flex gap-3 sm:gap-4">
                        <span className="w-5 shrink-0 select-none text-right text-fg-muted/50">
                          {line.n}
                        </span>
                        {line.parts ? (
                          <code className="min-w-0 flex-1 whitespace-pre-wrap font-mono">
                            {line.parts.map((p, i) => (
                              <span key={i} className={p.c}>
                                {p.t}
                              </span>
                            ))}
                          </code>
                        ) : (
                          <span className="flex-1">&nbsp;</span>
                        )}
                      </div>
                    ))}
                    <div className="mt-1 flex gap-3 sm:gap-4">
                      <span className="w-5 shrink-0 select-none text-right text-fg-muted/50">
                        14
                      </span>
                      <span className="inline-block h-[1.1em] w-0.5 bg-fg" />
                    </div>
                  </div>
                </div>

                <div className="bg-bg-muted/50">
                  <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                    <span className="text-sm text-fg-muted">preview.pdf</span>
                    <span className="text-[11px] text-fg-muted">A4 · print-ready</span>
                  </div>
                  <div className="flex justify-center p-6 sm:p-10">
                    <article
                      className="w-full max-w-[24rem] rounded-md border border-border bg-bg-paper p-7 shadow-paper sm:p-9"
                      aria-hidden
                    >
                      <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
                        <div>
                          <p className="text-sm text-fg-muted">Dynamogic · Internal</p>
                          <h3 className="mt-2 text-xl font-semibold tracking-tight text-fg sm:text-2xl">
                            Q3 Product Brief
                          </h3>
                        </div>
                        <div className="h-8 w-8 shrink-0 rounded-md bg-invert-bg" />
                      </div>
                      <div className="mt-5">
                        <p className="text-sm font-medium text-fg-muted">Summary</p>
                        <p className="mt-2 text-[13px] leading-relaxed text-fg">
                          Ship brand-aware PDFs from any agent — persistent kit,
                          one render call, link back to the finished document.
                        </p>
                      </div>
                      <div className="mt-5">
                        <p className="text-sm font-medium text-fg-muted">Goals</p>
                        <ul className="mt-2 space-y-1.5 text-[13px] text-fg">
                          <li className="flex gap-2">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-fg" />
                            One-click MD → PDF
                          </li>
                          <li className="flex gap-2">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-fg" />
                            Persistent brand kit
                          </li>
                          <li className="flex gap-2">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-fg" />
                            MCP delivery for agents
                          </li>
                        </ul>
                      </div>
                      {/* One code line — JetBrains Mono allowed */}
                      <div className="mt-6 rounded-md border border-border bg-bg-muted px-3 py-2.5 font-mono text-[11px] text-fg-muted">
                        await docs.render(&#123; md, brand &#125;)
                      </div>
                      <div className="mt-6 flex items-center justify-between border-t border-border pt-3">
                        <span className="text-[11px] text-fg-muted">Page 1 of 1</span>
                        <span className="text-[11px] text-fg-muted">Soft paper</span>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-5 text-sm text-fg-muted">
              Side-by-side Markdown and PDF — what you type is what stakeholders print.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
