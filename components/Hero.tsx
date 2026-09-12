export function Hero() {
  return (
    <section id="top" className="relative" aria-label="Hero">
      <div className="site-wrap pb-10 pt-14 sm:pb-14 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center lg:max-w-4xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-fg-muted">
            MD → PDF · Dynamogic suite
          </p>
          <h1 className="display-xl mx-auto mt-6 max-w-[16ch] text-[clamp(2.75rem,8vw,5.5rem)] text-fg">
            Markdown in. Documents that look finished.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-[1.08rem] leading-relaxed text-fg-muted sm:text-[1.15rem]">
            Dynamogic Docs turns plain Markdown into print-ready PDFs — soft
            paper spacing, intentional typography, zero template sludge. Write
            once. Ship a document that feels like your company made it.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#waitlist"
              className="btn-soft inline-flex h-12 items-center rounded-md px-7 text-sm font-semibold"
            >
              Join the waitlist
            </a>
            <a
              href="#stage"
              className="inline-flex h-12 items-center rounded-md border border-border-strong bg-bg-paper px-6 text-sm font-semibold text-fg transition-colors hover:bg-bg-muted"
            >
              See the editor
            </a>
          </div>
          <p className="mt-5 font-mono text-[12px] text-fg-muted">
            Free convert forever · Pro brand kits ·{" "}
            <span className="text-fg">docs.dynamogic.com</span>
          </p>
        </div>
      </div>
    </section>
  );
}
