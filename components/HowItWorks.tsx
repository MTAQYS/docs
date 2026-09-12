const steps = [
  {
    num: "01",
    title: "Write Markdown",
    body: "Draft in the editor or paste from Claude, Cursor, or ChatGPT. Headings, lists, code — kept as structure, not spaghetti HTML.",
  },
  {
    num: "02",
    title: "Apply the Brand Layer",
    body: "Logo, colors, fonts, header and footer — set once. Every export inherits your identity without another design pass.",
  },
  {
    num: "03",
    title: "Export PDF",
    body: "Print-ready pages with soft paper spacing. Download for humans, or return a link when an agent calls Docs via MCP.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="border-y border-border bg-bg-muted/40 section-pad">
      <div className="site-wrap">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-fg-muted">
          How it works
        </p>
        <h2 className="display-xl mt-4 max-w-[16ch] text-[clamp(2rem,4.5vw,3.25rem)] text-fg">
          Three steps. No design debt.
        </h2>
        <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-fg-muted">
          Docs sits between AI output and the document you send. Convert is
          free. Brand memory is the product.
        </p>
        <ol className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.num} className="paper-card rounded-xl p-6 sm:p-7">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-fg-muted">
                {s.num}
              </span>
              <h3 className="mt-3 text-[16px] font-semibold tracking-tight text-fg">
                {s.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
