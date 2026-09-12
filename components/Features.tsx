import { Reveal } from "./motion/Reveal";

const features = [
  {
    title: "MD → PDF that prints",
    body: "Quiet type, soft margins, page breaks that respect headings.",
  },
  {
    title: "Brand kit that sticks",
    body: "Logo, colors, letterhead once. Every export looks like yours.",
  },
  {
    title: "Built for agents",
    body: "MCP render path: agents return a view link — stay in the chat.",
  },
  {
    title: "Free core convert",
    body: "Write and export at $0. Pro unlocks brand kits — never a wall.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-t border-border section-pad">
      <div className="site-wrap">
        <Reveal>
          <h2 className="display-xl max-w-[16ch] text-[clamp(1.65rem,3.2vw,2.25rem)] text-fg">
            What ships.
          </h2>
        </Reveal>

        <ul className="mt-8 border-t border-border">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 40} as="li">
              <div className="grid gap-1.5 border-b border-border py-5 sm:grid-cols-12 sm:gap-8 sm:py-5">
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
