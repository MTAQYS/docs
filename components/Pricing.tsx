import { Reveal } from "./motion/Reveal";

const freeFeatures = [
  "Unlimited Markdown drafts",
  "Core MD → PDF export",
  "Soft paper default theme",
];

const proFeatures = [
  "Everything in Free",
  "Persistent brand kits",
  "Headers, footers, letterhead",
  "Templates + MCP (roadmap)",
];

export function Pricing() {
  return (
    <section id="pricing" className="border-y border-border bg-bg-muted/40 section-pad">
      <div className="site-wrap">
        <Reveal>
          <p className="kicker">Pricing</p>
          <h2 className="display-xl mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] text-fg">
            Free convert. Pro brand.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-fg-muted">
            Placeholders aligned with the Dynamogic family — not final. Free stays
            free for Markdown to PDF.
          </p>
        </Reveal>

        {/* Quiet 2-col — equal paper weight, no invert billboard */}
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <article className="flex h-full flex-col rounded-lg border border-border bg-bg-paper p-6 shadow-soft sm:p-7">
              <h3 className="text-sm font-medium text-fg-muted">Free</h3>
              <p className="mt-3 text-3xl font-semibold tracking-tight text-fg">$0</p>
              <p className="mt-2 text-sm text-fg-muted">Write and export forever</p>
              <ul className="mt-6 flex-1 space-y-2.5 text-sm text-fg">
                {freeFeatures.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-fg" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#waitlist"
                className="mt-7 inline-flex h-10 w-fit items-center rounded-md border border-border-strong px-4 text-sm font-medium text-fg transition-colors hover:bg-bg-muted"
              >
                Start free on waitlist
              </a>
            </article>
          </Reveal>

          <Reveal delay={60}>
            <article className="flex h-full flex-col rounded-lg border border-border-strong bg-bg-paper p-6 shadow-soft sm:p-7">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-sm font-medium text-fg-muted">Pro</h3>
                <span className="text-sm text-fg-muted">brand + agents</span>
              </div>
              <p className="mt-3 text-3xl font-semibold tracking-tight text-fg">
                ~$15
                <span className="text-base font-medium text-fg-muted">/mo</span>
              </p>
              <p className="mt-2 text-sm text-fg-muted">
                Placeholder · Dynamogic family pricing
              </p>
              <ul className="mt-6 flex-1 space-y-2.5 text-sm text-fg">
                {proFeatures.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-fg" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#waitlist"
                className="btn-flat mt-7 inline-flex h-10 w-fit items-center rounded-md px-5 text-sm font-medium"
              >
                Join waitlist for Pro
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
