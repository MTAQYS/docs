import { Reveal } from "./motion/Reveal";

const steps = [
  {
    num: "01",
    title: "Write",
    body: "Draft or paste Markdown. Structure stays intact.",
  },
  {
    num: "02",
    title: "Brand",
    body: "Logo, colors, letterhead — set once. Every export inherits it.",
  },
  {
    num: "03",
    title: "Export",
    body: "Print-ready PDF. Download, or return a link for agents.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="section-pad">
      <div className="site-wrap">
        <Reveal>
          <h2 className="display-xl max-w-[14ch] text-[clamp(1.65rem,3.2vw,2.25rem)] text-fg">
            Three steps.
          </h2>
        </Reveal>

        <Reveal delay={40} className="mt-10">
          <ol className="grid gap-0 border-t border-border md:grid-cols-3">
            {steps.map((s, i) => (
              <li
                key={s.num}
                className={`border-b border-border py-7 md:border-b-0 md:px-6 md:py-9 first:md:pl-0 last:md:pr-0 ${
                  i < steps.length - 1 ? "md:border-r" : ""
                }`}
              >
                <span className="text-sm text-fg-muted">{s.num}</span>
                <h3 className="mt-2.5 text-[15px] font-semibold tracking-tight text-fg">
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
