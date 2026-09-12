import { Reveal } from "./motion/Reveal";

const freeFeatures = [
  "Unlimited Markdown drafts",
  "Core MD → PDF export",
  "Soft paper default",
];

const proFeatures = [
  "Everything in Free",
  "Persistent brand kits",
  "Headers, footers, letterhead",
  "Templates + MCP (roadmap)",
];

export function Pricing() {
  return (
    <section id="pricing" className="border-y border-border bg-bg-muted/30 section-pad">
      <div className="site-wrap">
        <Reveal>
          <h2 className="display-xl text-[clamp(1.65rem,3.2vw,2.25rem)] text-fg">
            Free convert. Pro brand.
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-fg-muted">
            Placeholders — not final. Free stays free for Markdown to PDF.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <article className="flex h-full flex-col rounded-lg border border-border bg-bg-paper p-6 shadow-soft sm:p-7">
              <h3 className="text-sm text-fg-muted">Free</h3>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-fg">$0</p>
              <p className="mt-1.5 text-sm text-fg-muted">Write and export forever</p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-fg">
                {freeFeatures.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-fg" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#waitlist"
                className="mt-6 inline-flex h-10 w-fit items-center rounded-md border border-border-strong px-4 text-sm font-medium text-fg transition-colors hover:bg-bg-muted"
              >
                Join waitlist
              </a>
            </article>
          </Reveal>

          <Reveal delay={50}>
            <article className="flex h-full flex-col rounded-lg border border-border bg-bg-paper p-6 shadow-soft sm:p-7">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-sm text-fg-muted">Pro</h3>
                <span className="text-sm text-fg-muted">brand + agents</span>
              </div>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-fg">
                ~$15
                <span className="text-base font-medium text-fg-muted">/mo</span>
              </p>
              <p className="mt-1.5 text-sm text-fg-muted">Placeholder</p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-fg">
                {proFeatures.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-fg" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#waitlist"
                className="btn-flat mt-6 inline-flex h-10 w-fit items-center rounded-md px-5 text-sm font-medium"
              >
                Join waitlist
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
