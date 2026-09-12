import { Reveal } from "./motion/Reveal";

const products = [
  {
    name: "OS",
    blurb: "Dynamogic hub — brand layer & suite home.",
    href: "https://mtaqys.github.io/dynamogic/",
  },
  {
    name: "BePro",
    blurb: "Freemium CV builder — free craft, Pro AI.",
    href: "https://mtaqys.github.io/bepro/",
  },
  {
    name: "Docs",
    blurb: "Markdown → print-ready PDF.",
    href: "#top",
    current: true,
  },
];

export function SuiteStrip() {
  return (
    <section id="suite" className="section-pad" aria-label="Dynamogic suite">
      <div className="site-wrap">
        <Reveal>
          <p className="kicker">Suite</p>
          <h2 className="display-xl mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] text-fg">
            OS · BePro · Docs
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-fg-muted">
            One soft paper system. Three doors across the Dynamogic family.
          </p>
        </Reveal>

        <Reveal delay={40}>
          <ul className="mt-10 grid gap-0 border-t border-border sm:grid-cols-3">
            {products.map((p, i) => (
              <li
                key={p.name}
                className={`border-b border-border py-6 sm:border-b-0 sm:px-6 sm:py-8 first:sm:pl-0 last:sm:pr-0 ${
                  i < products.length - 1 ? "sm:border-r" : ""
                }`}
              >
                <a
                  href={p.href}
                  rel={p.current ? undefined : "noopener noreferrer"}
                  className="group block"
                >
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-[15px] font-semibold tracking-tight text-fg">
                      {p.name}
                    </h3>
                    {p.current && (
                      <span className="text-sm text-fg-muted">You are here</span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {p.blurb}
                  </p>
                  {!p.current && (
                    <span className="mt-3 inline-block text-sm text-fg underline decoration-border underline-offset-4 group-hover:decoration-fg">
                      Open →
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
