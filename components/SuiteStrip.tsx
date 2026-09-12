const products = [
  {
    name: "Brand Layer",
    blurb: "Persistent identity between AI and every document.",
    href: "https://mtaqys.github.io/dynamogic/",
    tag: "Hub",
  },
  {
    name: "BePro",
    blurb: "Freemium CV builder — free craft, Pro AI assist.",
    href: "https://mtaqys.github.io/bepro/",
    tag: "CV",
  },
  {
    name: "Docs",
    blurb: "Markdown → print-ready PDF with soft paper craft.",
    href: "#top",
    tag: "You are here",
    current: true,
  },
];

export function SuiteStrip() {
  return (
    <section id="suite" className="section-pad" aria-label="Dynamogic suite">
      <div className="site-wrap">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-fg-muted">
          Dynamogic suite
        </p>
        <h2 className="display-xl mt-4 max-w-[20ch] text-[clamp(2rem,4.5vw,3.25rem)] text-fg">
          Brand Layer · BePro · Docs
        </h2>
        <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-fg-muted">
          One soft paper system. Three doors — brand memory, career craft, and
          document delivery. Same charcoal calm across the family.
        </p>
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {products.map((p) => (
            <li key={p.name}>
              <a
                href={p.href}
                rel={p.current ? undefined : "noopener noreferrer"}
                className={`group flex h-full flex-col rounded-xl border p-6 transition-colors sm:p-7 ${
                  p.current
                    ? "border-border-strong bg-invert-bg text-invert-fg shadow-billboard"
                    : "paper-card hover:border-border-strong"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3
                    className={`text-[15px] font-semibold tracking-tight ${
                      p.current ? "text-invert-fg" : "text-fg"
                    }`}
                  >
                    {p.name}
                  </h3>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.18em] ${
                      p.current ? "text-invert-fg/50" : "text-fg-muted"
                    }`}
                  >
                    {p.tag}
                  </span>
                </div>
                <p
                  className={`mt-3 flex-1 text-sm leading-relaxed ${
                    p.current ? "text-invert-fg/70" : "text-fg-muted"
                  }`}
                >
                  {p.blurb}
                </p>
                <span
                  className={`mt-5 text-sm font-medium ${
                    p.current
                      ? "text-invert-fg"
                      : "text-fg underline decoration-border underline-offset-4 group-hover:decoration-fg"
                  }`}
                >
                  {p.current ? "Current product" : "Open →"}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
