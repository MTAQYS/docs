const features = [
  {
    title: "MD → PDF that prints",
    body: "Clean typography, soft paper margins, and page breaks that respect your headings — not a browser print dialog in a trench coat.",
  },
  {
    title: "JetBrains Mono for source",
    body: "The editor speaks Markdown in mono. The PDF speaks Inter. Two fonts, one calm craft language across the Dynamogic suite.",
  },
  {
    title: "Brand Layer ready",
    body: "Connect logo, colors, and letterhead once. Every brief, proposal, and agent output ships looking like your company made it.",
  },
  {
    title: "Built for agents",
    body: "MCP-friendly render path on the roadmap: agents return a view/download link so you never leave the chat to chase a PDF.",
  },
  {
    title: "Free core convert",
    body: "Write and export forever at $0. Pro unlocks brand kits, templates, and higher limits — never a brick wall on Markdown → PDF.",
  },
  {
    title: "Suite identity",
    body: "Same soft paper tokens as Brand Layer and BePro. Future home docs.dynamogic.com — charcoal calm, not purple sludge.",
  },
];

export function Features() {
  return (
    <section id="features" className="section-pad">
      <div className="site-wrap">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-fg-muted">
          Features
        </p>
        <h2 className="display-xl mt-4 max-w-[18ch] text-[clamp(2rem,4.5vw,3.25rem)] text-fg">
          Intention over automation theater
        </h2>
        <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-fg-muted">
          Rendering Markdown is a commodity. Persistent brand + agent delivery
          is the wedge. Docs owns the last mile between AI and a document you
          can send.
        </p>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <li key={f.title} className="paper-card rounded-xl p-6 sm:p-7">
              <h3 className="text-[15px] font-semibold tracking-tight text-fg">
                {f.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">
                {f.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
