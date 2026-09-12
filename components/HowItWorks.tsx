import { Reveal } from "./motion/Reveal";

const steps = [
  {
    num: "01",
    title: "Write",
    body: "Draft or paste Markdown. Headings, lists, code — kept as structure.",
  },
  {
    num: "02",
    title: "Brand",
    body: "Logo, colors, letterhead — set once. Every export inherits it.",
  },
  {
    num: "03",
    title: "Export",
    body: "Print-ready PDF. Download for humans, or return a link for agents.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="border-y border-border section-pad">
      <div className="site-wrap">
        <Reveal>
          <p className="kicker">How it works</p>
          <h2 className="display-xl mt-3 max-w-[16ch] text-[clamp(1.75rem,3.5vw,2.5rem)] text-fg">
            Three steps. No design debt.
          </h2>
        </Reveal>

        {/* Horizontal 01–03 with thin rules — not cards */}
        <Reveal delay={40} className="mt-12">
          <ol className="grid gap-0 border-t border-border md:grid-cols-3">
            {steps.map((s, i) => (
              <li
                key={s.num}
                className={`border-b border-border py-8 md:border-b-0 md:px-6 md:py-10 first:md:pl-0 last:md:pr-0 ${
                  i < steps.length - 1 ? "md:border-r" : ""
                }`}
              >
                <span className="text-sm text-fg-muted">{s.num}</span>
                <h3 className="mt-3 text-base font-semibold tracking-tight text-fg">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-fg-muted">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
