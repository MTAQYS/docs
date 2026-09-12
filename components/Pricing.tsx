const freeFeatures = [
  "Unlimited Markdown drafts",
  "Core MD → PDF export",
  "Soft paper default theme",
  "Mobile + desktop editor",
];

const proFeatures = [
  "Everything in Free",
  "Persistent Brand Layer kits",
  "Custom headers, footers, letterhead",
  "Template library (roadmap)",
  "MCP / agent delivery (roadmap)",
];

export function Pricing() {
  return (
    <section id="pricing" className="border-y border-border bg-bg-muted/30 section-pad">
      <div className="site-wrap">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-fg-muted">
          Pricing sketch
        </p>
        <h2 className="display-xl mt-4 text-[clamp(2rem,4.5vw,3.25rem)] text-fg">
          Free convert. Pro brand.
        </h2>
        <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-fg-muted">
          Amounts are placeholders aligned with the Dynamogic family — not
          final. Free stays free for Markdown to PDF.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="flex flex-col rounded-xl border border-border bg-bg-paper p-7 shadow-soft sm:p-8">
            <h3 className="text-sm font-semibold text-fg-muted">Free</h3>
            <p className="mt-4 text-4xl font-extrabold tracking-tightest text-fg">
              $0
            </p>
            <p className="mt-3 text-sm leading-relaxed text-fg-muted">
              Write and export forever
            </p>
            <ul className="mt-8 flex-1 space-y-3 text-sm text-fg">
              {freeFeatures.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-fg" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#waitlist"
              className="mt-8 inline-flex h-10 w-fit items-center rounded-md border border-border-strong px-4 text-sm font-semibold text-fg transition-colors hover:bg-bg-muted"
            >
              Start free on waitlist
            </a>
          </article>

          <article className="relative flex flex-col overflow-hidden rounded-xl bg-invert-bg p-7 text-invert-fg shadow-billboard sm:p-8 lg:p-9">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-xl"
              style={{ boxShadow: "inset 0 0 0 1px rgba(250,250,250,0.12)" }}
              aria-hidden
            />
            <div className="relative flex items-baseline justify-between gap-3">
              <h3 className="text-sm font-semibold tracking-wide text-invert-fg/60">
                Pro
              </h3>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-invert-fg/40">
                brand + agents
              </span>
            </div>
            <p className="relative mt-5 text-[clamp(2.75rem,6vw,4.25rem)] font-extrabold leading-none tracking-tightest text-invert-fg">
              ~$15
              <span className="text-[1.15rem] font-semibold tracking-normal text-invert-fg/50">
                /mo
              </span>
            </p>
            <p className="relative mt-3 text-sm text-invert-fg/50">
              Placeholder · Dynamogic family pricing
            </p>
            <p className="relative mt-5 max-w-sm text-[15px] leading-relaxed text-invert-fg/70">
              Brand kits, letterhead, and agent delivery when Docs becomes the
              last mile for every AI document you ship.
            </p>
            <ul className="relative mt-7 flex-1 space-y-3 text-[15px] text-invert-fg/90">
              {proFeatures.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-invert-fg" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#waitlist"
              className="relative mt-8 inline-flex h-11 w-fit items-center rounded-md bg-invert-fg px-6 text-sm font-bold text-fg transition-opacity hover:opacity-85"
            >
              Join waitlist for Pro
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
