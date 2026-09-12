import { Reveal } from "./motion/Reveal";

const features = [
  {
    title: "MD → PDF that prints",
    body: "Quiet type, soft margins, page breaks that respect headings — not a browser print dialog.",
  },
  {
    title: "Brand kit that sticks",
    body: "Logo, colors, letterhead once. Every brief and agent output ships looking like yours.",
  },
  {
    title: "Built for agents",
    body: "MCP render path on the roadmap: agents return a view link so you never leave the chat.",
  },
  {
    title: "Free core convert",
    body: "Write and export forever at $0. Pro unlocks brand kits and templates — never a brick wall.",
  },
];

export function Features() {
  return (
    <section id="features" className="section-pad">
      <div className="site-wrap">
        <Reveal>
          <p className="kicker">Features</p>
          <h2 className="display-xl mt-3 max-w-[18ch] text-[clamp(1.75rem,3.5vw,2.5rem)] text-fg">
            Print-shop craft. Agent-ready.
          </h2>
        </Reveal>

        {/* Editorial list — max 4 */}
        <ul className="mt-10 border-t border-border">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 40} as="li">
              <div className="grid gap-2 border-b border-border py-5 sm:grid-cols-12 sm:gap-8 sm:py-6">
                <h3 className="text-[15px] font-semibold tracking-tight text-fg sm:col-span-4">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-fg-muted sm:col-span-8">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
